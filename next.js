# build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
# run
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3000
COPY --from=builder /app ./
EXPOSE 3000
# package.json should have: "start": "next start -H 0.0.0.0 -p 3000"
CMD ["npm","run","start"]
