// templates/component/FooterContactForm.js

import Arrow from '@components/ui/Arrow/Arrow'
import { FC } from 'react'

import s from './FooterContactForm.module.css'

export interface FooterContactFormProps {
  tagline?: string
}

const FooterContactForm: FC<FooterContactFormProps> = ({
  tagline = "Let's bring you to the next level",
}) => {
  return (
    <form className={s.root}>
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
        <option value="new business">new business</option>
        <option value="partnership">partnership</option>
        <option value="careers">careers</option>
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
        <button type="submit">
          <Arrow
            direction="right"
            element="div"
            className="inline-block px-10 pointer-events-none"
          />
        </button>
      </div>
    </form>
  )
}

export default FooterContactForm
