'use server'
import nodemailer from 'nodemailer'

export async function sendEmail(data: FormData) {
  const testAccount = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  })

  const info = await transporter.sendMail({
    from: 'dev@monkeykodeagency.com',
    to: 'dev@monkeykodeagency.com',
    subject: "New message from Monkeykode's website",
    text: `Name: ${data.get('name')}
Company: ${data.get('company')}
Interest: ${data.get('interest')}
Email: ${data.get('email')} `,
  })

  console.log('Message sent: %s', info.messageId)
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
}
