"use server"

type FormData = {
  name: string
  email: string
  phone: string
  company?: string
  website?: string
  message?: string
  ctaSource?: string
  transactionalConsent?: boolean
  marketingConsent?: boolean
}

export async function sendContactEmail(data: FormData) {
  try {
    // Use environment variable only - no embedded keys
    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (!RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY environment variable not found")
      return {
        success: false,
        error: "Email service not configured. Please contact support.",
      }
    }

    console.log("✅ Using Resend API key from environment variable...")
    console.log("Form data received:", data)

    // Import Resend
    const { Resend } = await import("resend")
    const resend = new Resend(RESEND_API_KEY)

    // Use Resend's default domain for sending
    const fromEmail = "onboarding@resend.dev"
    // Send to your verified email address
    const businessEmail = "scottlefoll@gmail.com"

    // Send email to business owner (your verified email)
    console.log("📧 Sending notification email to scottlefoll@gmail.com...")
    const emailResult = await resend.emails.send({
      from: fromEmail,
      to: businessEmail,
      subject: `🚀 New Lead from ${data.ctaSource || "Website"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7e22ce;">🎯 New Lead Submission</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>📍 Source:</strong> ${data.ctaSource || "General Inquiry"}</p>
            <p><strong>👤 Name:</strong> ${data.name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>📞 Phone:</strong> ${data.phone}</p>
            ${data.company ? `<p><strong>🏢 Company:</strong> ${data.company}</p>` : ""}
            ${data.website ? `<p><strong>🌐 Website:</strong> <a href="${data.website}" target="_blank">${data.website}</a></p>` : ""}
            ${data.message ? `<p><strong>💬 Message:</strong><br>${data.message}</p>` : ""}
          </div>
          
          <h3 style="color: #059669;">📋 Consent Information</h3>
          <div style="background: #ecfdf5; padding: 15px; border-radius: 8px;">
            <p><strong>📱 Transactional Consent:</strong> ${data.transactionalConsent ? "✅ Yes" : "❌ No"}</p>
            <p><strong>📢 Marketing Consent:</strong> ${data.marketingConsent ? "✅ Yes" : "❌ No"}</p>
          </div>
          
          <hr style="margin: 30px 0;">
          <p style="color: #6b7280; font-size: 14px;"><em>This email was sent from your Brandstorm AI website contact form.</em></p>
        </div>
      `,
    })

    console.log("📧 Notification email result:", emailResult)

    // Only send confirmation email if the customer email is your verified email
    // Otherwise skip it to avoid errors
    let confirmationResult = null
    if (data.email === businessEmail) {
      console.log("📧 Sending confirmation email to customer (verified email)...")
      confirmationResult = await resend.emails.send({
        from: fromEmail,
        to: data.email,
        subject: "✅ Thank you for contacting Brandstorm AI",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #7e22ce;">Thank you for your inquiry, ${data.name}! 🎉</h2>
            <p>We've received your message and will get back to you within 24 hours.</p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3>📋 Your Submission Summary:</h3>
              <ul style="list-style: none; padding: 0;">
                <li style="margin: 8px 0;"><strong>👤 Name:</strong> ${data.name}</li>
                <li style="margin: 8px 0;"><strong>📧 Email:</strong> ${data.email}</li>
                <li style="margin: 8px 0;"><strong>📞 Phone:</strong> ${data.phone}</li>
                ${data.company ? `<li style="margin: 8px 0;"><strong>🏢 Company:</strong> ${data.company}</li>` : ""}
                ${data.website ? `<li style="margin: 8px 0;"><strong>🌐 Website:</strong> ${data.website}</li>` : ""}
                ${data.message ? `<li style="margin: 8px 0;"><strong>💬 Message:</strong> ${data.message}</li>` : ""}
              </ul>
            </div>
            
            <p>In the meantime, feel free to explore our services or call us directly at <strong>📞 (555) 123-4567</strong>.</p>
            
            <p>Best regards,<br>
            <strong>The Brandstorm AI Team</strong> 🚀</p>
            
            <hr style="margin: 30px 0;">
            <p style="color: #6b7280; font-size: 14px;"><em>This is an automated confirmation email. Please do not reply to this email.</em></p>
          </div>
        `,
      })
      console.log("📧 Confirmation email result:", confirmationResult)
    } else {
      console.log("⚠️ Skipping confirmation email - customer email not verified in Resend")
    }

    // Check if notification email was sent successfully
    if (emailResult.error) {
      console.error("❌ Error sending notification email:", emailResult.error)
      return { success: false, error: `Failed to send notification: ${emailResult.error.message}` }
    }

    // Check confirmation email if it was sent
    if (confirmationResult && confirmationResult.error) {
      console.error("❌ Error sending confirmation email:", confirmationResult.error)
      return { success: false, error: `Failed to send confirmation: ${confirmationResult.error.message}` }
    }

    console.log("✅ Email(s) sent successfully!")
    return {
      success: true,
      message: "Lead notification sent successfully!",
      emailIds: {
        notification: emailResult.data?.id,
        confirmation: confirmationResult?.data?.id,
      },
    }
  } catch (error) {
    console.error("❌ Error in sendContactEmail:", error)

    // Log the form data for manual follow-up
    console.log("📝 Form submission data (for manual follow-up):", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      source: data.ctaSource,
    })

    return {
      success: false,
      error: `Email service error: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}
