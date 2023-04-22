import { FC } from 'react'

import s from './Browser.module.css'

export interface BrowserProps {}

const Browser: FC<BrowserProps> = () => {
  return (
    <div className={s.root}>
      <svg
        width="70"
        height="62"
        viewBox="0 0 70 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.8316 44.6476C27.5748 44.6476 27.316 44.5593 27.1049 44.3795L19.8397 38.1931C19.589 37.9795 19.4449 37.6675 19.4449 37.3379C19.4449 37.009 19.5897 36.697 19.8397 36.4833L27.1049 30.297C27.5766 29.8948 28.2852 29.9518 28.6875 30.4236C29.0891 30.896 29.0327 31.6046 28.5603 32.0062L22.2994 37.3379L28.5603 42.6697C29.0327 43.0719 29.0891 43.7805 28.6875 44.2523C28.4651 44.5135 28.1493 44.6476 27.8316 44.6476Z"
          fill="#E35613"
          stroke="black"
          stroke-width="0.75"
        />
        <path
          d="M42.1741 44.6476C41.8565 44.6476 41.5407 44.5135 41.3189 44.2523C40.9167 43.7805 40.9737 43.0719 41.4455 42.6697L47.7064 37.3379L41.4455 32.0062C40.9737 31.6046 40.9167 30.896 41.3189 30.4236C41.7205 29.9518 42.4298 29.8948 42.9009 30.297L50.1661 36.4833C50.4167 36.697 50.5608 37.009 50.5608 37.3379C50.5608 37.6675 50.4167 37.9795 50.1661 38.1931L42.9009 44.3795C42.6898 44.5593 42.431 44.6476 42.1741 44.6476Z"
          fill="#E35613"
          stroke="black"
          stroke-width="0.75"
        />
        <path
          d="M32.431 49.2877C32.3539 49.2877 32.2762 49.2796 32.1979 49.2633C31.5914 49.1355 31.203 48.5396 31.3308 47.9332L35.8587 26.4351C35.9865 25.8287 36.5817 25.4402 37.1888 25.568C37.7953 25.6958 38.1837 26.291 38.0559 26.8981L33.528 48.3962C33.4165 48.925 32.9504 49.2877 32.431 49.2877Z"
          fill="#E35613"
          stroke="black"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.53837 61H61.4674C65.6238 61 69.0058 57.6186 69.0058 53.4616V8.53837C69.0058 4.38199 65.6238 1 61.4674 1H8.53837C4.38199 1 1 4.38199 1 8.53837V53.4616C1 57.6186 4.38199 61 8.53837 61ZM3.24547 8.53837C3.24547 5.62001 5.62001 3.24547 8.53837 3.24547H61.4674C64.3858 3.24547 66.7603 5.62001 66.7603 8.53837V53.4616C66.7603 56.38 64.3858 58.7545 61.4674 58.7545H8.53837C5.62001 58.7545 3.24547 56.38 3.24547 53.4616V8.53837Z"
          fill="#E35613"
        />
        <path
          d="M61.4674 60.625H8.53837V61.375H61.4674V60.625ZM68.6308 53.4616C68.6308 57.4115 65.4167 60.625 61.4674 60.625V61.375C65.8309 61.375 69.3808 57.8258 69.3808 53.4616H68.6308ZM68.6308 8.53837V53.4616H69.3808V8.53837H68.6308ZM61.4674 1.375C65.4167 1.375 68.6308 4.5891 68.6308 8.53837H69.3808C69.3808 4.17489 65.8309 0.625 61.4674 0.625V1.375ZM8.53837 1.375H61.4674V0.625H8.53837V1.375ZM1.375 8.53837C1.375 4.5891 4.5891 1.375 8.53837 1.375V0.625C4.17489 0.625 0.625 4.17489 0.625 8.53837H1.375ZM1.375 53.4616V8.53837H0.625V53.4616H1.375ZM8.53837 60.625C4.58908 60.625 1.375 57.4115 1.375 53.4616H0.625C0.625 57.8258 4.17491 61.375 8.53837 61.375V60.625ZM8.53837 2.87047C5.4129 2.87047 2.87047 5.4129 2.87047 8.53837H3.62047C3.62047 5.82712 5.82712 3.62047 8.53837 3.62047V2.87047ZM61.4674 2.87047H8.53837V3.62047H61.4674V2.87047ZM67.1353 8.53837C67.1353 5.4129 64.5929 2.87047 61.4674 2.87047V3.62047C64.1786 3.62047 66.3853 5.82712 66.3853 8.53837H67.1353ZM67.1353 53.4616V8.53837H66.3853V53.4616H67.1353ZM61.4674 59.1295C64.5929 59.1295 67.1353 56.5871 67.1353 53.4616H66.3853C66.3853 56.1729 64.1786 58.3795 61.4674 58.3795V59.1295ZM8.53837 59.1295H61.4674V58.3795H8.53837V59.1295ZM2.87047 53.4616C2.87047 56.5871 5.4129 59.1295 8.53837 59.1295V58.3795C5.82712 58.3795 3.62047 56.1729 3.62047 53.4616H2.87047ZM2.87047 8.53837V53.4616H3.62047V8.53837H2.87047Z"
          fill="black"
        />
        <path
          d="M67.883 18.9781H2.12274C1.50247 18.9781 1 18.4757 1 17.8554C1 17.2358 1.50247 16.7327 2.12274 16.7327H67.883C68.5033 16.7327 69.0058 17.2358 69.0058 17.8554C69.0058 18.4757 68.5033 18.9781 67.883 18.9781Z"
          fill="#E35613"
          stroke="black"
          stroke-width="0.75"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16.6299 10.0527C16.6299 12.0112 18.2245 13.6057 20.183 13.6057C22.1421 13.6057 23.736 12.0112 23.736 10.0527C23.736 8.09352 22.1421 6.49963 20.183 6.49963C18.2245 6.49963 16.6299 8.09352 16.6299 10.0527ZM18.8754 10.0527C18.8754 9.33154 19.4625 8.74511 20.183 8.74511C20.9041 8.74511 21.4905 9.33154 21.4905 10.0527C21.4905 10.7738 20.9041 11.3602 20.183 11.3602C19.4625 11.3602 18.8754 10.7738 18.8754 10.0527Z"
          fill="#E35613"
        />
        <path
          d="M20.183 13.2307C18.4316 13.2307 17.0049 11.8041 17.0049 10.0527H16.2549C16.2549 12.2183 18.0173 13.9807 20.183 13.9807V13.2307ZM23.361 10.0527C23.361 11.8041 21.935 13.2307 20.183 13.2307V13.9807C22.3493 13.9807 24.111 12.2183 24.111 10.0527H23.361ZM20.183 6.87463C21.935 6.87463 23.361 8.30063 23.361 10.0527H24.111C24.111 7.88641 22.3492 6.12463 20.183 6.12463V6.87463ZM17.0049 10.0527C17.0049 8.30067 18.4315 6.87463 20.183 6.87463V6.12463C18.0174 6.12463 16.2549 7.88637 16.2549 10.0527H17.0049ZM20.183 8.37011C19.2555 8.37011 18.5004 9.12431 18.5004 10.0527H19.2504C19.2504 9.53876 19.6695 9.12011 20.183 9.12011V8.37011ZM21.8655 10.0527C21.8655 9.12443 21.1112 8.37011 20.183 8.37011V9.12011C20.697 9.12011 21.1155 9.53864 21.1155 10.0527H21.8655ZM20.183 11.7352C21.1112 11.7352 21.8655 10.9809 21.8655 10.0527H21.1155C21.1155 10.5667 20.697 10.9852 20.183 10.9852V11.7352ZM18.5004 10.0527C18.5004 10.981 19.2555 11.7352 20.183 11.7352V10.9852C19.6695 10.9852 19.2504 10.5666 19.2504 10.0527H18.5004Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.71338 10.0182C5.71338 11.9774 7.30726 13.5713 9.26641 13.5713C11.2256 13.5713 12.8194 11.9774 12.8194 10.0182C12.8194 8.0591 11.2256 6.46521 9.26641 6.46521C7.30726 6.46521 5.71338 8.0591 5.71338 10.0182ZM7.95885 10.0182C7.95885 9.29774 8.54591 8.71068 9.26641 8.71068C9.98755 8.71068 10.574 9.29774 10.574 10.0182C10.574 10.7394 9.98755 11.3258 9.26641 11.3258C8.54591 11.3258 7.95885 10.7394 7.95885 10.0182Z"
          fill="#E35613"
        />
        <path
          d="M9.26641 13.1963C7.51437 13.1963 6.08838 11.7703 6.08838 10.0182H5.33838C5.33838 12.1845 7.10016 13.9463 9.26641 13.9463V13.1963ZM12.4444 10.0182C12.4444 11.7703 11.0185 13.1963 9.26641 13.1963V13.9463C11.4327 13.9463 13.1944 12.1845 13.1944 10.0182H12.4444ZM9.26641 6.84021C11.0185 6.84021 12.4444 8.2662 12.4444 10.0182H13.1944C13.1944 7.85199 11.4327 6.09021 9.26641 6.09021V6.84021ZM6.08838 10.0182C6.08838 8.2662 7.51437 6.84021 9.26641 6.84021V6.09021C7.10016 6.09021 5.33838 7.85199 5.33838 10.0182H6.08838ZM9.26641 8.33568C8.3388 8.33568 7.58385 9.09063 7.58385 10.0182H8.33385C8.33385 9.50485 8.75302 9.08568 9.26641 9.08568V8.33568ZM10.949 10.0182C10.949 9.09075 10.1948 8.33568 9.26641 8.33568V9.08568C9.78032 9.08568 10.199 9.50473 10.199 10.0182H10.949ZM9.26641 11.7008C10.1947 11.7008 10.949 10.9465 10.949 10.0182H10.199C10.199 10.5323 9.78044 10.9508 9.26641 10.9508V11.7008ZM7.58385 10.0182C7.58385 10.9466 8.33892 11.7008 9.26641 11.7008V10.9508C8.7529 10.9508 8.33385 10.5322 8.33385 10.0182H7.58385Z"
          fill="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M27.5472 10.0865C27.5472 12.0456 29.1411 13.6395 31.0996 13.6395C33.0587 13.6395 34.6526 12.0456 34.6526 10.0865C34.6526 8.12794 33.0587 6.53406 31.0996 6.53406C29.1411 6.53406 27.5472 8.12794 27.5472 10.0865ZM29.7927 10.0865C29.7927 9.36533 30.3791 8.7789 31.0996 8.7789C31.8207 8.7789 32.4072 9.36533 32.4072 10.0865C32.4072 10.8076 31.8207 11.394 31.0996 11.394C30.3791 11.394 29.7927 10.8076 29.7927 10.0865Z"
          fill="#E35613"
        />
        <path
          d="M31.0996 13.2645C29.3482 13.2645 27.9222 11.8386 27.9222 10.0865H27.1722C27.1722 12.2527 28.9339 14.0145 31.0996 14.0145V13.2645ZM34.2776 10.0865C34.2776 11.8385 32.8516 13.2645 31.0996 13.2645V14.0145C33.2658 14.0145 35.0276 12.2527 35.0276 10.0865H34.2776ZM31.0996 6.90906C32.8517 6.90906 34.2776 8.33509 34.2776 10.0865H35.0276C35.0276 7.92079 33.2658 6.15906 31.0996 6.15906V6.90906ZM27.9222 10.0865C27.9222 8.33505 29.3482 6.90906 31.0996 6.90906V6.15906C28.934 6.15906 27.1722 7.92084 27.1722 10.0865H27.9222ZM31.0996 8.4039C30.1719 8.4039 29.4177 9.15834 29.4177 10.0865H30.1677C30.1677 9.57232 30.5863 9.1539 31.0996 9.1539V8.4039ZM32.7822 10.0865C32.7822 9.15823 32.0278 8.4039 31.0996 8.4039V9.1539C31.6136 9.1539 32.0322 9.57244 32.0322 10.0865H32.7822ZM31.0996 11.769C32.0278 11.769 32.7822 11.0147 32.7822 10.0865H32.0322C32.0322 10.6005 31.6136 11.019 31.0996 11.019V11.769ZM29.4177 10.0865C29.4177 11.0146 30.1719 11.769 31.0996 11.769V11.019C30.5863 11.019 30.1677 10.6006 30.1677 10.0865H29.4177Z"
          fill="black"
        />
      </svg>
    </div>
  )
}

export default Browser
