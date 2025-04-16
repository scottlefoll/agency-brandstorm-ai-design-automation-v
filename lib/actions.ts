"use server"

type FormData = {
  name: string
  email: string
  phone: string
  company: string
  website?: string
  message?: string
  ctaSource?: string
}

// Simple mock function that doesn't use any networking features
export async function sendContactEmail(data: FormData) {
  // Just log the data and return success
  console.log("Form submission received:", data)

  // Return success without trying to send an actual email
  return { success: true }
}
