// templates/component/FooterContactForm.js
'use client'

import Arrow from '@components/ui/Arrow/Arrow'
import { sendEmail } from '@framework/email'
import { FC, useState } from 'react'
import { flushSync } from 'react-dom'

import s from './FooterContactForm.module.css'

export interface FooterContactFormProps {
  tagline?: string
}

const FooterContactForm: FC<FooterContactFormProps> = ({
  tagline = "Let's bring you to the next level",
}) => {
  // NOTE: tried to experimental `useFormStatus` first, but it doesn't work currently
  const [pending, setPending] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(data: FormData) {
    // NOTE: if not flushed updates get batched, and the form never gets disabled
    flushSync(() => setPending(true))

    const formValues = Object.fromEntries(data.entries())

    await sendEmail({
      to: process.env.NEXT_PUBLIC_SENDGRID_FROM_EMAIL as string,
      from: 'no-reply@monkeykodeagency.com',
      subject: `Inquiry from ${formValues.name}`,
      text: `Name: ${formValues.name}, Company: ${formValues.company}, Interest: ${formValues.interest}, Email: ${formValues.email}`,
      html: `<p>Name: ${formValues.name}</p><p>Company: ${formValues.company}</p><p>Interest: ${formValues.interest}</p><p>Email: ${formValues.email}</p>`,
    })

    setPending(false)
    setSent(true)
  }

  return (
    <form action={handleSubmit}>
      <fieldset className={s.root} disabled={pending}>
        <h2 className={s.heading}>{tagline}</h2>
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="name"
          aria-label="Name"
          required
        />
        <input
          className={s.input}
          type="text"
          name="company"
          placeholder="company"
          aria-label="company"
          required
        />
        <select
          className={s.input}
          name="interest"
          placeholder="interest"
          aria-label="interest"
          required
          defaultValue=""
        >
          <option value="" disabled>
            interest
          </option>
          <option value="development">development</option>
          <option value="maintenance">maintenance</option>
          <option value="consulting">consulting</option>
        </select>
        <div className="text-right">
          <input
            className={s.input}
            type="email"
            name="email"
            placeholder="email"
            aria-label="email"
            required
          />
          <button type="submit" className="disabled:opacity-50">
            <Arrow
              direction="right"
              element="div"
              className="inline-block px-10 pointer-events-none"
            />
          </button>
        </div>
        <div className="text-center lg:col-span-5">
          {sent &&
            !pending &&
            "Your inquiry has been sent. We'll be in touch soon!"}
        </div>
      </fieldset>
    </form>
  )
}

export default FooterContactForm
