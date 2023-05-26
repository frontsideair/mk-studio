// templates/component/Store.js

import { FC } from 'react'

import s from './Store.module.css'

export interface StoreProps {}

const Store: FC<StoreProps> = () => {
  return (
    <div className={s.root}>
      <svg
        width="56"
        height="50"
        viewBox="0 0 56 50"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="text-primary"
      >
        <path d="M15.642 32.6581C15.1905 32.6581 14.8245 33.0241 14.8245 33.4756V34.9472C14.8245 35.3987 15.1905 35.7647 15.642 35.7647C16.0935 35.7647 16.4595 35.3987 16.4595 34.9472V33.4756C16.4595 33.0241 16.0935 32.6581 15.642 32.6581Z" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.9044 43.5143H53.2281C54.6519 43.5143 55.8101 44.6726 55.8101 46.0965V48.6822C55.8101 49.4089 55.219 50 54.4924 50H1.31775C0.59113 50 0 49.4089 0 48.6822V46.0965C0 44.6726 1.15828 43.5143 2.58209 43.5143H3.90584V20.8317C1.71322 20.4436 0.0421846 18.5256 0.0421846 16.2234V13.0758C0.0421846 13.0646 0.0429338 13.0535 0.0436823 13.0425L0.0445827 13.0283L0.0450747 13.0173C0.0452602 13.0121 0.0454457 13.007 0.0458908 13.0018C0.0487249 12.9695 0.053303 12.9379 0.0598433 12.9069L0.0612604 12.9015C0.0676916 12.8718 0.0760849 12.8428 0.0856773 12.8143C0.0872292 12.8097 0.0889638 12.805 0.0907037 12.8004L0.0907104 12.8004L0.0935256 12.7928C0.102573 12.7684 0.112601 12.7447 0.123829 12.7214L0.126394 12.7154C0.127291 12.7131 0.128195 12.7108 0.129279 12.7086L3.74397 5.51986V1.75987C3.74397 0.789517 4.53348 0 5.50384 0H9.3264C9.77789 0 10.1439 0.366036 10.1439 0.817531C10.1439 1.26903 9.77789 1.63506 9.3264 1.63506H5.50384C5.43506 1.63506 5.37903 1.69109 5.37903 1.75987V4.90399H50.4311V1.75987C50.4311 1.69109 50.3751 1.63506 50.3063 1.63506H13.1302C12.6787 1.63506 12.3127 1.26903 12.3127 0.817531C12.3127 0.366036 12.6787 0 13.1302 0H50.3063C51.2767 0 52.0662 0.789517 52.0662 1.75987V5.51986L55.681 12.7086L55.6823 12.7115L55.6837 12.715L55.6837 12.7151L55.6839 12.7155C55.6847 12.7175 55.6855 12.7195 55.6864 12.7214C55.6976 12.7447 55.7077 12.7684 55.7167 12.7928L55.7209 12.804L55.7246 12.8143C55.7342 12.8428 55.7426 12.8718 55.749 12.9015C55.7494 12.9033 55.7501 12.905 55.7504 12.9069C55.7569 12.9378 55.7614 12.9695 55.7644 13.0018L55.7648 13.0077L55.7651 13.0157L55.7657 13.0283L55.7666 13.0424C55.7673 13.0535 55.7681 13.0646 55.7681 13.0758V16.2234C55.7681 18.5257 54.097 20.4436 51.9044 20.8317V43.5143ZM51.0868 19.2696C52.7664 19.2696 54.1329 17.9032 54.1329 16.2235V13.8935H48.0406V16.2235C48.0406 17.9032 49.4071 19.2696 51.0868 19.2696ZM50.7485 6.53905L53.6243 12.2583H47.7982L45.7441 6.53905H50.7485ZM46.0608 12.2583L44.0067 6.53905H38.9235L40.156 12.2583H46.0608ZM46.4057 13.8933V16.2234C46.4057 17.9031 45.0392 19.2695 43.3596 19.2695C41.6799 19.2695 40.3135 17.9031 40.3135 16.2234V13.8933H46.4057ZM38.4835 12.2583L37.251 6.53905H32.1188L32.5297 12.2583H38.4835ZM38.6784 13.8933V16.2234C38.6784 17.9031 37.3119 19.2695 35.6324 19.2695C33.9528 19.2695 32.5863 17.9031 32.5863 16.2234V13.8933H38.6784ZM30.4794 6.53905H25.3306L24.9198 12.2583H30.8903L30.4794 6.53905ZM24.8589 13.8933H30.9512V16.2234C30.9512 17.9031 29.5847 19.2695 27.9051 19.2695C26.2254 19.2695 24.8589 17.9031 24.8589 16.2234V13.8933ZM31.7687 18.8627C30.9246 20.0946 29.5079 20.9046 27.9051 20.9046C26.3023 20.9046 24.8855 20.0946 24.0415 18.8627C23.1974 20.0946 21.7806 20.9046 20.1779 20.9046C18.5752 20.9046 17.1585 20.0946 16.3143 18.8627C15.4702 20.0946 14.0535 20.9046 12.4507 20.9046C10.8479 20.9046 9.43115 20.0946 8.58702 18.8627C7.88983 19.8802 6.80164 20.6085 5.5409 20.8317V43.5143H7.00101V25.3472C7.00101 24.5087 7.68316 23.8266 8.52162 23.8266H17.9733C18.8117 23.8266 19.4939 24.5087 19.4939 25.3472V43.5143H50.2693V20.8317C49.0086 20.6085 47.9204 19.8802 47.2232 18.8627C46.3791 20.0946 44.9624 20.9046 43.3596 20.9046C41.7568 20.9046 40.34 20.0946 39.4959 18.8627C38.6519 20.0946 37.2352 20.9046 35.6324 20.9046C34.0296 20.9046 32.6129 20.0946 31.7687 18.8627ZM17.8588 25.4616V43.5143H8.63607V25.4616H17.8588ZM9.40444 13.8935V16.2235C9.40444 17.9031 10.7709 19.2696 12.4506 19.2696C14.1302 19.2696 15.4967 17.9032 15.4967 16.2235V13.8935H9.40444ZM18.5592 6.53905H23.6913L23.2805 12.2583H17.3267L18.5592 6.53905ZM23.2239 13.8933H17.1318V16.2234C17.1318 17.9031 18.4981 19.2695 20.1778 19.2695C21.8574 19.2695 23.2239 17.9031 23.2239 16.2234V13.8933ZM16.8865 6.53905L15.654 12.2583H9.74922L11.8033 6.53905H16.8865ZM10.066 6.53905H5.06161L2.18586 12.2583H8.01192L10.066 6.53905ZM1.67725 16.2235V13.8935H7.76949V16.2235C7.76949 17.9032 6.40301 19.2696 4.72337 19.2696C3.04372 19.2696 1.67725 17.9031 1.67725 16.2235ZM1.63506 46.0963V48.3649H54.175V46.0963C54.175 45.5741 53.7502 45.1493 53.2279 45.1493H2.58209C2.05985 45.1493 1.63506 45.5741 1.63506 46.0963Z"
        />
        <path d="M46.5201 23.8266H36.523C36.0715 23.8266 35.7055 24.1926 35.7055 24.6441C35.7055 25.0956 36.0715 25.4616 36.523 25.4616H46.4058V38.3279H22.8365V25.4616H32.6741C33.1256 25.4616 33.4916 25.0956 33.4916 24.6441C33.4916 24.1926 33.1256 23.8266 32.6741 23.8266H22.722C21.8836 23.8266 21.2014 24.5086 21.2014 25.3472V38.4425C21.2014 39.281 21.8836 39.9631 22.722 39.9631H46.5201C47.3586 39.9631 48.0408 39.281 48.0408 38.4425V25.3472C48.0408 24.5087 47.3586 23.8266 46.5201 23.8266Z" />
      </svg>
    </div>
  )
}

export default Store