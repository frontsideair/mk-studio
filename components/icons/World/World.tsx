// templates/component/World.js

import { FC } from 'react'

import s from './World.module.css'

export interface WorldProps {}

const World: FC<WorldProps> = () => {
  return (
    <div className={s.root}>
      <svg
        width="62"
        height="62"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56.4566 17.4295C55.8741 17.7114 55.6303 18.4122 55.9122 18.9947C57.7329 22.7573 58.6561 26.7963 58.6561 31C58.6561 46.2497 46.2496 58.6563 30.9999 58.6563C25.0223 58.6563 19.1712 56.6922 14.4012 53.1063C15.0242 51.7995 14.7961 50.1851 13.7155 49.1047C12.3448 47.734 10.1145 47.734 8.74363 49.1047C7.37289 50.4754 7.37289 52.7057 8.74363 54.0766C9.80406 55.137 11.4017 55.3914 12.7226 54.7734C17.9457 58.7937 24.4015 61 30.9999 61C47.542 61 60.9999 47.5421 60.9999 31C60.9999 26.4398 59.9979 22.0572 58.0219 17.9739C57.7401 17.3914 57.0394 17.1476 56.4566 17.4295Z"
          fill="#E35613"
          stroke="black"
        />
        <path
          d="M5.24805 44.0038C5.8368 43.735 6.09602 43.0397 5.82707 42.4511C4.17918 38.8437 3.34375 34.9909 3.34375 31C3.34375 15.7503 15.7503 3.34375 31 3.34375C36.8838 3.34375 42.4509 5.1516 47.1804 8.58355C46.3584 9.93613 46.5304 11.7276 47.6983 12.8955C49.0691 14.2662 51.2993 14.2662 52.6702 12.8955C54.0409 11.5247 54.0409 9.29441 52.6702 7.92355C51.7002 6.95359 50.3001 6.67105 49.0784 7.07371C43.8747 3.13129 37.5701 1 31 1C14.4579 1 1 14.4579 1 31C1 35.3294 1.9068 39.5097 3.6952 43.4248C3.96273 44.0106 4.65648 44.2741 5.24805 44.0038Z"
          fill="#E35613"
          stroke="black"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M31 8.73438C19.5384 8.73438 8.73438 17.8382 8.73438 31C8.73438 43.1911 18.6366 53.2656 31 53.2656C43.3609 53.2656 53.2656 43.1972 53.2656 31C53.2656 18.8089 43.3634 8.73438 31 8.73438ZM24.7277 12.0906C22.306 14.9693 20.8404 19.0779 20.082 22.7969H12.8463C15.1277 17.7682 19.439 13.8495 24.7277 12.0906ZM11.958 25.1406C11.3864 26.9939 11.0781 28.9616 11.0781 31C11.0781 33.0384 11.3864 35.0061 11.958 36.8594H19.6805C19.4173 34.9731 19.2812 33.0063 19.2812 31C19.2812 28.9938 19.4173 27.0257 19.6805 25.1395L11.958 25.1406ZM12.8464 39.2031H20.0821C20.8403 42.9212 22.3057 47.0303 24.7278 49.9094C19.439 48.1505 15.1277 44.2318 12.8464 39.2031ZM22.4887 39.2031C23.8313 45.316 26.6031 49.86 29.8281 50.7591V39.2031H22.4887ZM29.8281 36.8594H22.0564C21.7765 34.9983 21.625 33.0287 21.625 31C21.625 28.9713 21.7766 27.0017 22.0564 25.1406H29.8281V36.8594ZM22.4887 22.7969H29.8281V11.2409C26.6031 12.14 23.8313 16.6839 22.4887 22.7969ZM32.1719 11.2409C35.3969 12.14 38.1687 16.684 39.5113 22.7969H32.1719V11.2409ZM39.9436 25.1406H32.1719V36.8594H39.9436C40.2234 34.9983 40.375 33.0287 40.375 31C40.375 28.9713 40.2235 27.0017 39.9436 25.1406ZM32.1719 50.7591V39.202L39.5113 39.2031C38.1687 45.3161 35.3969 49.86 32.1719 50.7591ZM41.918 39.202C41.1602 42.9197 39.6951 47.0295 37.2723 49.9094C42.561 48.1505 46.8723 44.2318 49.1538 39.202H41.918ZM50.9219 31C50.9219 33.0384 50.6136 35.0061 50.042 36.8594H42.3195C42.5827 34.9731 42.7188 33.0063 42.7188 31C42.7188 28.9937 42.5827 27.0269 42.3195 25.1406H50.042C50.6136 26.9939 50.9219 28.9616 50.9219 31ZM37.2722 12.0906C39.6943 14.9697 41.1597 19.0788 41.9179 22.7969H49.1535C46.8723 17.7682 42.5609 13.8495 37.2722 12.0906Z"
          fill="#E35613"
        />
        <path
          d="M20.082 22.7969V23.2969H20.4903L20.5719 22.8968L20.082 22.7969ZM24.7277 12.0906L25.1103 12.4125L26.2503 11.0573L24.5699 11.6162L24.7277 12.0906ZM12.8463 22.7969L12.3909 22.5903L12.0704 23.2969H12.8463V22.7969ZM11.958 25.1406L11.9579 24.6406L11.5889 24.6407L11.4802 24.9933L11.958 25.1406ZM11.958 36.8594L11.4802 37.0067L11.5889 37.3594H11.958V36.8594ZM19.6805 36.8594V37.3594H20.2551L20.1757 36.7903L19.6805 36.8594ZM19.6805 25.1395L20.1757 25.2086L20.2551 24.6394L19.6804 24.6395L19.6805 25.1395ZM20.0821 39.2031L20.572 39.1032L20.4904 38.7031H20.0821V39.2031ZM12.8464 39.2031V38.7031H12.0705L12.391 39.4097L12.8464 39.2031ZM24.7278 49.9094L24.57 50.3838L26.2505 50.9427L25.1104 49.5875L24.7278 49.9094ZM29.8281 50.7591L29.6939 51.2407L30.3281 51.4176V50.7591H29.8281ZM22.4887 39.2031V38.7031H21.8669L22.0003 39.3104L22.4887 39.2031ZM29.8281 39.2031H30.3281V38.7031H29.8281V39.2031ZM22.0564 36.8594L21.5619 36.9337L21.6259 37.3594H22.0564V36.8594ZM29.8281 36.8594V37.3594H30.3281V36.8594H29.8281ZM22.0564 25.1406V24.6406H21.6259L21.5619 25.0663L22.0564 25.1406ZM29.8281 25.1406H30.3281V24.6406H29.8281V25.1406ZM29.8281 22.7969V23.2969H30.3281V22.7969H29.8281ZM22.4887 22.7969L22.0003 22.6896L21.8669 23.2969H22.4887V22.7969ZM29.8281 11.2409H30.3281V10.5824L29.6939 10.7593L29.8281 11.2409ZM39.5113 22.7969V23.2969H40.1331L39.9997 22.6896L39.5113 22.7969ZM32.1719 11.2409L32.3061 10.7593L31.6719 10.5824V11.2409H32.1719ZM32.1719 22.7969H31.6719V23.2969H32.1719V22.7969ZM32.1719 25.1406V24.6406H31.6719V25.1406H32.1719ZM39.9436 25.1406L40.4381 25.0663L40.3741 24.6406H39.9436V25.1406ZM32.1719 36.8594H31.6719V37.3594H32.1719V36.8594ZM39.9436 36.8594V37.3594H40.3741L40.4381 36.9337L39.9436 36.8594ZM32.1719 39.202L32.172 38.702L31.6719 38.7019V39.202H32.1719ZM32.1719 50.7591H31.6719V51.4176L32.3061 51.2407L32.1719 50.7591ZM39.5113 39.2031L39.9997 39.3104L40.133 38.7032L39.5114 38.7031L39.5113 39.2031ZM37.2723 49.9094L36.8897 49.5875L35.7496 50.9427L37.4301 50.3838L37.2723 49.9094ZM41.918 39.202V38.702H41.5096L41.4281 39.1021L41.918 39.202ZM49.1538 39.202L49.6091 39.4085L49.9296 38.702H49.1538V39.202ZM50.042 36.8594V37.3594H50.4111L50.5198 37.0067L50.042 36.8594ZM42.3195 36.8594L41.8243 36.7903L41.7449 37.3594H42.3195V36.8594ZM42.3195 25.1406V24.6406H41.7449L41.8243 25.2097L42.3195 25.1406ZM50.042 25.1406L50.5198 24.9933L50.4111 24.6406H50.042V25.1406ZM41.9179 22.7969L41.428 22.8968L41.5096 23.2969H41.9179V22.7969ZM37.2722 12.0906L37.43 11.6162L35.7495 11.0573L36.8896 12.4125L37.2722 12.0906ZM49.1535 22.7969V23.2969H49.9294L49.6089 22.5903L49.1535 22.7969ZM9.23438 31C9.23438 18.1389 19.7893 9.23438 31 9.23438V8.23438C19.2874 8.23438 8.23438 17.5375 8.23438 31H9.23438ZM31 52.7656C18.9153 52.7656 9.23438 42.9175 9.23438 31H8.23438C8.23438 43.4648 18.3579 53.7656 31 53.7656V52.7656ZM52.7656 31C52.7656 42.9235 43.0824 52.7656 31 52.7656V53.7656C43.6395 53.7656 53.7656 43.471 53.7656 31H52.7656ZM31 9.23438C43.0847 9.23438 52.7656 19.0825 52.7656 31H53.7656C53.7656 18.5352 43.6421 8.23438 31 8.23438V9.23438ZM20.5719 22.8968C21.3227 19.2152 22.7654 15.1999 25.1103 12.4125L24.345 11.7688C21.8465 14.7388 20.3581 18.9406 19.5921 22.697L20.5719 22.8968ZM12.8463 23.2969H20.082V22.2969H12.8463V23.2969ZM24.5699 11.6162C19.1479 13.4194 14.7294 17.4359 12.3909 22.5903L13.3016 23.0035C15.5259 18.1006 19.73 14.2796 24.8854 12.5651L24.5699 11.6162ZM11.5781 31C11.5781 29.0123 11.8787 27.0943 12.4358 25.288L11.4802 24.9933C10.8941 26.8936 10.5781 28.911 10.5781 31H11.5781ZM12.4358 36.712C11.8787 34.9057 11.5781 32.9877 11.5781 31H10.5781C10.5781 33.089 10.8941 35.1064 11.4802 37.0067L12.4358 36.712ZM19.6805 36.3594H11.958V37.3594H19.6805V36.3594ZM18.7812 31C18.7812 33.0287 18.9188 35.0187 19.1853 36.9285L20.1757 36.7903C19.9158 34.9276 19.7812 32.9838 19.7812 31H18.7812ZM19.1853 25.0704C18.9188 26.9802 18.7812 28.9713 18.7812 31H19.7812C19.7812 29.0162 19.9158 27.0712 20.1757 25.2086L19.1853 25.0704ZM11.958 25.6406L19.6806 25.6395L19.6804 24.6395L11.9579 24.6406L11.958 25.6406ZM20.0821 38.7031H12.8464V39.7031H20.0821V38.7031ZM25.1104 49.5875C22.7652 46.7998 21.3226 42.784 20.572 39.1032L19.5922 39.303C20.358 43.0585 21.8463 47.2609 24.3452 50.2313L25.1104 49.5875ZM12.391 39.4097C14.7294 44.5641 19.1479 48.5806 24.57 50.3838L24.8856 49.4349C19.73 47.7204 15.5259 43.8994 13.3017 38.9966L12.391 39.4097ZM29.9624 50.2775C28.5202 49.8754 27.1081 48.6323 25.8759 46.6704C24.65 44.7184 23.6394 42.1114 22.977 39.0959L22.0003 39.3104C22.6806 42.4077 23.7272 45.1292 25.0291 47.2022C26.3247 49.2652 27.9111 50.7437 29.6939 51.2407L29.9624 50.2775ZM29.3281 39.2031V50.7591H30.3281V39.2031H29.3281ZM22.4887 39.7031H29.8281V38.7031H22.4887V39.7031ZM22.0564 37.3594H29.8281V36.3594H22.0564V37.3594ZM21.125 31C21.125 33.0534 21.2784 35.0479 21.5619 36.9337L22.5508 36.785C22.2747 34.9488 22.125 33.0041 22.125 31H21.125ZM21.5619 25.0663C21.2785 26.9521 21.125 28.9466 21.125 31H22.125C22.125 28.996 22.2748 27.0512 22.5508 25.2149L21.5619 25.0663ZM29.8281 24.6406H22.0564V25.6406H29.8281V24.6406ZM30.3281 36.8594V25.1406H29.3281V36.8594H30.3281ZM29.8281 22.2969H22.4887V23.2969H29.8281V22.2969ZM29.3281 11.2409V22.7969H30.3281V11.2409H29.3281ZM22.977 22.9041C23.6394 19.8885 24.65 17.2816 25.8759 15.3296C27.1081 13.3676 28.5202 12.1246 29.9624 11.7225L29.6939 10.7593C27.9111 11.2563 26.3247 12.7347 25.0291 14.7977C23.7272 16.8707 22.6806 19.5923 22.0003 22.6896L22.977 22.9041ZM39.9997 22.6896C39.3194 19.5923 38.2728 16.8708 36.9709 14.7978C35.6753 12.7348 34.0889 11.2563 32.3061 10.7593L32.0376 11.7225C33.4798 12.1246 34.8919 13.3677 36.1241 15.3296C37.35 17.2816 38.3606 19.8886 39.023 22.9041L39.9997 22.6896ZM32.1719 23.2969H39.5113V22.2969H32.1719V23.2969ZM31.6719 11.2409V22.7969H32.6719V11.2409H31.6719ZM32.1719 25.6406H39.9436V24.6406H32.1719V25.6406ZM32.6719 36.8594V25.1406H31.6719V36.8594H32.6719ZM39.9436 36.3594H32.1719V37.3594H39.9436V36.3594ZM39.875 31C39.875 33.004 39.7252 34.9488 39.4492 36.7851L40.4381 36.9337C40.7215 35.0479 40.875 33.0534 40.875 31H39.875ZM39.4492 25.215C39.7253 27.0512 39.875 28.9959 39.875 31H40.875C40.875 28.9466 40.7216 26.9521 40.4381 25.0663L39.4492 25.215ZM31.6719 39.202V50.7591H32.6719V39.202H31.6719ZM39.5114 38.7031L32.172 38.702L32.1718 39.702L39.5112 39.7031L39.5114 38.7031ZM32.3061 51.2407C34.0889 50.7437 35.6753 49.2653 36.9709 47.2023C38.2728 45.1293 39.3194 42.4077 39.9997 39.3104L39.023 39.0959C38.3606 42.1115 37.35 44.7184 36.1241 46.6704C34.8919 48.6324 33.4798 49.8754 32.0376 50.2775L32.3061 51.2407ZM37.655 50.2313C40.1546 47.26 41.6425 43.057 42.4079 39.3018L41.4281 39.1021C40.6779 42.7825 39.2356 46.799 36.8897 49.5875L37.655 50.2313ZM48.6984 38.9954C46.4741 43.8994 42.27 47.7204 37.1146 49.4349L37.4301 50.3838C42.8521 48.5806 47.2706 44.5641 49.6091 39.4085L48.6984 38.9954ZM41.918 39.702H49.1538V38.702H41.918V39.702ZM50.5198 37.0067C51.1059 35.1064 51.4219 33.089 51.4219 31H50.4219C50.4219 32.9877 50.1213 34.9057 49.5642 36.712L50.5198 37.0067ZM42.3195 37.3594H50.042V36.3594H42.3195V37.3594ZM42.2188 31C42.2188 32.9838 42.0842 34.9276 41.8243 36.7903L42.8147 36.9285C43.0812 35.0187 43.2188 33.0287 43.2188 31H42.2188ZM41.8243 25.2097C42.0842 27.0724 42.2188 29.0162 42.2188 31H43.2188C43.2188 28.9713 43.0812 26.9813 42.8147 25.0715L41.8243 25.2097ZM50.042 24.6406H42.3195V25.6406H50.042V24.6406ZM51.4219 31C51.4219 28.911 51.1059 26.8936 50.5198 24.9933L49.5642 25.288C50.1213 27.0943 50.4219 29.0123 50.4219 31H51.4219ZM42.4078 22.697C41.642 18.9415 40.1537 14.7391 37.6548 11.7687L36.8896 12.4125C39.2348 15.2002 40.6774 19.216 41.428 22.8968L42.4078 22.697ZM49.1535 22.2969H41.9179V23.2969H49.1535V22.2969ZM37.1144 12.5651C42.2699 14.2796 46.4741 18.1006 48.6982 23.0034L49.6089 22.5903C47.2706 17.4359 42.8519 13.4194 37.43 11.6162L37.1144 12.5651Z"
          fill="black"
        />
      </svg>
    </div>
  )
}

export default World
