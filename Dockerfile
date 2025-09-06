# -------- deps: install packages using the lockfile in the repo --------
FROM node:20-alpine AS deps
WORKDIR /app

# (Optional but sometimes needed for native deps on Alpine)
RUN apk add --no-cache libc6-compat

# Copy lockfiles first for better layer caching
COPY package.json ./
COPY package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Use the right package manager based on the lockfile
# and do a clean, reproducible install.
RUN set -eux; corepack enable; \
    if [ -f pnpm-lock.yaml ]; then corepack prepare pnpm@latest --activate && pnpm install --frozen-lockfile; \
    elif [ -f yarn.lock ]; then corepack prepare yarn@1.22.22 --activate && yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    else echo "No lockfile found (package-lock.json / pnpm-lock.yaml / yarn.lock)"; exit 1; fi

# -------- builder: build Next.js, then strip devDependencies --------
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

# Bring installed deps
COPY --from=deps /app/node_modules ./node_modules
COPY package.json ./
# Copy the rest of the source
COPY . .

# Build the app
RUN set -eux; corepack enable; \
    npm run build; \
    # Prune dev deps according to the lockfile in this repo
    if [ -f pnpm-lock.yaml ]; then corepack prepare pnpm@latest --activate && pnpm prune --prod; \
    elif [ -f yarn.lock ]; then yarn install --production --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm prune --omit=dev; \
    fi

# -------- runner: minimal, non-root, production server --------
FROM node:20-alpine AS runner
WORKDIR /app

# Create and use a non-root user
RUN addgroup -S app && adduser -S app -G app
USER app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1

# Copy only what we need to run
# (use --chown so files belong to the 'app' user)
COPY --chown=app:app --from=builder /app/.next ./.next
COPY --chown=app:app --from=builder /app/public ./public
COPY --chown=app:app --from=builder /app/node_modules ./node_modules
COPY --chown=app:app package.json ./
# Optional: uncomment to allow runtime audits/debugging
# COPY --chown=app:app /app/package-lock.json* ./ 
# COPY --chown=app:app /app/pnpm-lock.yaml* ./ 
# COPY --chown=app:app /app/yarn.lock* ./ 

EXPOSE 3000
# Optional: HEALTHCHECK example
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s CMD wget -qO- http://127.0.0.1:3000/ || exit 1
CMD ["npm","run","start"]
