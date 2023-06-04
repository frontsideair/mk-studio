import { FC } from 'react'

import DropdownItem from '../DropdownItem'

import { Menu } from '../../../types/graphql'
interface DropDownProps {
  items: Menu['items']
}

const DropDown: FC<DropDownProps> = ({ items }) => {
  if (items?.length === 0 || !items) {
    return null
  }
  if (items.every((item) => !item)) {
    return null
  }
  return (
    <>
      {items.map((item) =>
        item?.title ? <DropdownItem key={item.title} item={item} /> : null
      )}
    </>
  )
}

export default DropDown
