'use server'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

interface EmailParams {
  to: string
  from: string
  subject: string
  text: string
  html?: string
}

export async function sendEmail({
  to,
  from,
  subject,
  text,
  html,
}: EmailParams) {
  const msg = {
    to,
    from,
    subject,
    text,
    html,
  }

  try {
    await sgMail.send(msg)
    console.log(`Email sent to ${to}`)
  } catch (error) {
    console.error(`Error sending email to ${to}`, error)
    if (error.response) {
      console.error(error.response.body)
    }
  }
}
