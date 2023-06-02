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
      </svg>
    </div>
  )
}

export default Search
