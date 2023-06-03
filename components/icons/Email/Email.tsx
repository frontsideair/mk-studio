// templates/component/Email.js

import { FC } from 'react'

import s from './Email.module.css'

export interface EmailProps {}

const Email: FC<EmailProps> = () => {
  return (
    <div className={s.root}>
      <svg
        width="69"
        height="52"
        viewBox="0 0 69 52"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="text-primary"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.7777 6.5556V20.5148C61.5526 21.2198 67.6667 27.7668 67.6667 35.7221V37.1111C67.6667 40.1751 65.1751 42.6667 62.1112 42.6667C60.234 42.6667 58.5786 41.7259 57.5725 40.2966C56.2991 41.7382 54.4587 42.6667 52.3889 42.6667C48.5599 42.6667 45.4444 39.551 45.4444 35.7221C45.4444 31.8932 48.5599 28.7777 52.3888 28.7777C54.1585 28.7777 55.7582 29.4634 56.9858 30.5573C57.2352 30.3178 57.5708 30.1667 57.9444 30.1667C58.7121 30.1667 59.3333 30.7879 59.3333 31.5556V37.1112C59.3333 38.6424 60.5798 39.8889 62.1111 39.8889C63.6423 39.8889 64.8888 38.6424 64.8888 37.1112V35.7223C64.8888 28.8294 59.2816 23.2223 52.3888 23.2223C45.496 23.2223 39.8888 28.8294 39.8888 35.7223C39.8888 42.6151 45.4958 48.2223 52.3888 48.2223C54.5861 48.2223 56.7467 47.6445 58.6375 46.5513C59.3008 46.1633 60.1512 46.3926 60.535 47.0572C60.9203 47.7217 60.6924 48.5708 60.0292 48.9547C57.7152 50.2934 55.0745 51 52.3889 51C45.4105 51 39.5232 46.2917 37.7034 39.8889H6.5556C3.49154 39.8889 1 37.3973 1 34.3333V6.5556C1 3.49154 3.49154 1 6.55547 1H48.2221C51.2862 1 53.7777 3.49167 53.7777 6.5556ZM48.2223 3.77773H6.5556C6.52523 3.77773 6.49749 3.786 6.46974 3.79428C6.44513 3.80161 6.4205 3.80896 6.39401 3.81055L26.3405 20.1786C26.8003 20.4607 27.8244 20.553 28.531 20.1081L48.3855 3.81081C48.3588 3.80916 48.3339 3.80177 48.3091 3.7944C48.281 3.78606 48.253 3.77773 48.2223 3.77773ZM51 20.5148C43.2251 21.2198 37.1111 27.7668 37.1111 35.7223C37.1111 36.191 37.1398 36.653 37.1814 37.1112H6.5556C5.02435 37.1112 3.77786 35.8647 3.77786 34.3335V6.5556C3.77786 6.16224 3.86471 5.79076 4.01289 5.45143L24.7008 22.4167C25.5091 22.9443 26.4383 23.2224 27.3891 23.2224C28.3033 23.2224 29.197 22.9647 29.9837 22.4764C30.0624 22.4344 30.137 22.3842 30.2076 22.3259L50.7648 5.45117C50.9132 5.79076 51.0001 6.16224 51.0001 6.55573V20.5148H51ZM48.2223 35.7223C48.2223 38.0199 50.0913 39.8889 52.3889 39.8889C54.6866 39.8889 56.5556 38.0199 56.5556 35.7223C56.5556 33.4246 54.6866 31.5556 52.3889 31.5556C50.0913 31.5556 48.2223 33.4246 48.2223 35.7223Z"
        />
      </svg>
    </div>
  )
}

export default Email
