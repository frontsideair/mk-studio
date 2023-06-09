'use server'
import * as captcha from '@framework/captcha'
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
    console.log(`Email sent to ${to} from Footer Form`)
  } catch (error) {
    console.error(`Error sending email to ${to}`, error)
    if (error.response) {
      console.error(error.response.body)
    }
  }
}

interface InquiryParams {
  name: string
  company: string
  interest: string
  email: string
  cfTurnstileResponse: string
}

export async function sendInquiry({
  name,
  company,
  interest,
  email,
  cfTurnstileResponse,
}: InquiryParams) {
  try {
    const isHuman = await captcha.verify(cfTurnstileResponse)
    if (isHuman) {
      await Promise.all([
        sendEmail({
          to: process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL as string,
          from: 'no-reply@monkeykodeagency.com',
          subject: `Inquiry from ${name}`,
          text: `Name: ${name}, Company: ${company}, Interest: ${interest}, Email: ${email}`,
          html: `<p>Name: ${name}</p><p>Company: ${company}</p><p>Interest: ${interest}</p><p>Email: ${email}</p>`,
        }),
        sendEmail({
          to: email as string,
          from: 'no-reply@monkeykodeagency.com',
          subject: `We received your inquiry`,
          text: `We received your inquiry and we will be in touch soon!`,
          html: `<p>We received your inquiry and we will be in touch soon!</p>`,
        }),
      ])
      return 'success'
    } else {
      return 'error'
    }
  } catch {
    return 'error'
  }
}
