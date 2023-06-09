// templates/component/FooterContactForm.js
'use client'

import Arrow from '@components/ui/Arrow/Arrow'
import { sendInquiry } from '@framework/email'
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile'
import { FC, useRef, useState } from 'react'
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
  const [result, setResult] = useState(null)
  const formRef = useRef<HTMLFormElement>(null)
  const turnstileRef = useRef<TurnstileInstance>()

  async function handleSubmit(data: FormData) {
    // NOTE: if not flushed updates get batched, and the form never gets disabled
    flushSync(() => setPending(true))

    const result = await sendInquiry({
      name: data.get('name') as string,
      company: data.get('company') as string,
      interest: data.get('interest') as string,
      email: data.get('email') as string,
      cfTurnstileResponse: data.get('cf-turnstile-response') as string,
    })

    setResult(result)
    setPending(false)

    if (result === 'success') {
      formRef.current.reset()
      turnstileRef.current.reset()
    }
  }

  return (
    <form action={handleSubmit} ref={formRef}>
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
        <div className="text-center lg:col-span-5 -translate-y-24">
          <div>
            {result === 'success' &&
              !pending &&
              "Your inquiry has been sent. We'll be in touch soon!"}
          </div>
          <div className="text-red-400">
            {result === 'error' &&
              !pending &&
              'The form could not be sent successfully. Please try again later.'}
          </div>
        </div>
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY}
          options={{ size: 'invisible' }}
          onSuccess={() => console.log('Turnstile success')}
        />
      </fieldset>
    </form>
  )
}

export default FooterContactForm
