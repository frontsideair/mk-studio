// templates/component/Logo.js

import { FC } from 'react'

import s from './Logo.module.css'

export interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <div className={s.root}>
      <svg
        width="88"
        height="90"
        viewBox="0 0 88 90"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="text-primary"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.1269 35.6457C38.7285 35.7035 41.785 38.2932 42.4202 41.8252C43.0548 38.2964 46.1065 35.7077 49.7048 35.6457C50.4878 35.6624 51.263 35.8055 52 36.0695V22.8278C52 17.9523 48.0324 14 43.1381 14H41.8619C36.9676 14 33 17.9523 33 22.8278V35.9635C33.6891 35.7526 34.406 35.6455 35.1269 35.6457ZM41.8619 75H43.1381C48.0324 75 52 71.0477 52 66.1722V50.653C51.2602 50.8997 50.485 51.0249 49.7048 51.0237C46.1286 50.9684 43.0846 48.4157 42.4202 44.9149C41.7552 48.4189 38.7063 50.9725 35.1269 51.0237C34.406 51.024 33.6891 50.9169 33 50.7059V66.1722C33 71.0477 36.9676 75 41.8619 75Z"
        />
      </svg>
    </div>
  )
}

export default Logo
