// templates/component/Search.js

import { FC } from 'react'

import s from './Search.module.css'

export interface SearchProps {}

const Search: FC<SearchProps> = () => {
  return (
    <div className={s.root}>
      <svg
        width="53"
        height="52"
        viewBox="0 0 53 52"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="text-primary"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.4645 36.9941C29.9382 39.7407 25.5963 41.232 21.1265 41.2319C16.6538 41.2342 12.308 39.7457 8.77597 37.0018C0.00267029 30.1864 -1.58441 17.5493 5.23102 8.77597C12.0465 0.00267029 24.6835 -1.58441 33.4568 5.23102C42.2301 12.0465 43.8172 24.6836 37.0017 33.4569L50.3054 46.7605C51.2417 47.7299 51.2417 49.2668 50.3054 50.2362C49.3456 51.2301 47.7619 51.2576 46.7681 50.2978L33.4645 36.9941ZM31.8162 10.4293C25.9124 4.52563 16.3408 4.52574 10.4372 10.4295L10.3594 10.5073C4.49876 16.4109 4.53354 25.9477 10.4372 31.8083L10.4374 31.8085C16.3411 37.7121 25.9128 37.712 31.8164 31.8083C37.72 25.9045 37.7199 16.3329 31.8162 10.4293Z"
        />
        <path d="M21.1265 41.2319L21.1265 40.2319H21.126L21.1265 41.2319ZM33.4645 36.9941L34.1716 36.287L33.5469 35.6624L32.85 36.2052L33.4645 36.9941ZM8.77597 37.0018L9.38945 36.2121L9.38945 36.2121L8.77597 37.0018ZM5.23102 8.77597L6.02073 9.38945L5.23102 8.77597ZM33.4568 5.23102L32.8433 6.02073L33.4568 5.23102ZM37.0017 33.4569L36.212 32.8434L35.6708 33.5401L36.2946 34.164L37.0017 33.4569ZM50.3054 46.7605L51.0246 46.0658L51.0186 46.0595L51.0125 46.0534L50.3054 46.7605ZM50.3054 50.2362L49.5861 49.5415L49.586 49.5415L50.3054 50.2362ZM46.7681 50.2978L46.061 51.0049L46.0672 51.011L46.0734 51.0171L46.7681 50.2978ZM10.4372 10.4295L11.1443 11.1366L11.1443 11.1366L10.4372 10.4295ZM31.8162 10.4293L31.1091 11.1364L31.8162 10.4293ZM10.3594 10.5073L9.65225 9.80016L9.64968 9.80275L10.3594 10.5073ZM10.4372 31.8083L11.1443 31.1012L11.1417 31.0986L10.4372 31.8083ZM10.4374 31.8085L9.73027 32.5156L9.73028 32.5156L10.4374 31.8085ZM31.8164 31.8083L32.5235 32.5154L31.8164 31.8083ZM21.1265 42.2319C25.8189 42.232 30.377 40.6665 34.079 37.7831L32.85 36.2052C29.4993 38.815 25.3737 40.232 21.1265 40.2319L21.1265 42.2319ZM8.16249 37.7915C11.8701 40.6718 16.432 42.2343 21.127 42.2319L21.126 40.2319C16.8757 40.2341 12.7459 38.8196 9.38945 36.2121L8.16249 37.7915ZM4.44131 8.16249C-2.71293 17.3719 -1.04696 30.6373 8.16249 37.7915L9.38945 36.2121C1.0523 29.7355 -0.455887 17.7266 6.02073 9.38945L4.44131 8.16249ZM34.0703 4.44131C24.8608 -2.71293 11.5956 -1.04696 4.44131 8.16249L6.02073 9.38945C12.4973 1.0523 24.5061 -0.455886 32.8433 6.02073L34.0703 4.44131ZM37.7914 34.0704C44.9457 24.8609 43.2797 11.5956 34.0703 4.44131L32.8433 6.02073C41.1805 12.4973 42.6886 24.5063 36.212 32.8434L37.7914 34.0704ZM51.0125 46.0534L37.7088 32.7498L36.2946 34.164L49.5983 47.4676L51.0125 46.0534ZM51.0247 50.9309C52.3352 49.574 52.3353 47.4227 51.0246 46.0658L49.5861 47.4553C50.1481 48.0371 50.1481 48.9596 49.5861 49.5415L51.0247 50.9309ZM46.0734 51.0171C47.4645 52.3605 49.6812 52.322 51.0247 50.9309L49.586 49.5415C49.0099 50.1381 48.0594 50.1546 47.4628 49.5785L46.0734 51.0171ZM32.7574 37.7013L46.061 51.0049L47.4752 49.5907L34.1716 36.287L32.7574 37.7013ZM11.1443 11.1366C16.6574 5.62337 25.5959 5.62327 31.1091 11.1364L32.5233 9.72214C26.229 3.42799 16.0242 3.42811 9.73005 9.72237L11.1443 11.1366ZM11.0665 11.2144L11.1443 11.1366L9.73006 9.72236L9.65226 9.80016L11.0665 11.2144ZM11.1417 31.0986C5.63001 25.6271 5.59753 16.7235 11.0691 11.2118L9.64968 9.80275C3.39998 16.0983 3.43707 26.2682 9.73265 32.518L11.1417 31.0986ZM11.1445 31.1014L11.1443 31.1012L9.73006 32.5154L9.73027 32.5156L11.1445 31.1014ZM31.1093 31.1012C25.5962 36.6144 16.6577 36.6145 11.1445 31.1014L9.73028 32.5156C16.0245 38.8097 26.2294 38.8096 32.5235 32.5154L31.1093 31.1012ZM31.1091 11.1364C36.6223 16.6495 36.6224 25.588 31.1093 31.1012L32.5235 32.5154C38.8177 26.2211 38.8175 16.0163 32.5233 9.72214L31.1091 11.1364Z" />
      </svg>
    </div>
  )
}

export default Search
