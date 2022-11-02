import { Menu, Transition } from '@headlessui/react'
import cn from 'classnames'
import Link from 'next/link'
import { FC, Fragment } from 'react'
import { IndexQuery_menu_items } from 'types/IndexQuery'

import s from './DropdownItem.module.css'

interface DropDownItemProps {
  item: IndexQuery_menu_items
}
const DropdownItem: FC<DropDownItemProps> = ({ item }) => {
  return item?.links?.length ? (
    <Menu as="div" className={s.root}>
      <div>
        <Menu.Button className={s.mobileButton}>
          <span className={s.srOnly}>Open user menu</span>
          {item?.target?.title}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter={s.transitionEnter}
        enterFrom={s.transitionEnterFrom}
        enterTo={s.transitionEnterTo}
        leave={s.transitionLeave}
        leaveFrom={s.transitionLeaveFrom}
        leaveTo={s.transitionLeaveTo}
      >
        <Menu.Items className={s.menuItems}>
          {item?.links?.map((link, i) =>
            link ? (
              <Menu.Item key={`${link.target?.slug}_${i}` ?? i}>
                {({ active }) => (
                  <Link
                    href={`/${link.target?.slug?.current}`}
                    className={cn(active ? s.menuItemActive : '', s.menuItem)}
                  >
                    {link.target?.title}
                  </Link>
                )}
              </Menu.Item>
            ) : null
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  ) : (
    <Link
      href={`/${item?.target?.slug?.current}`}
      className={cn(
        item?.target?.slug?.current ? s.menuLinkActive : s.menuLinkActive,
        s.menuLink
      )}
      aria-current={item?.target?.slug?.current ? 'page' : undefined}
    >
      {item?.title}
    </Link>
  )
}
export default DropdownItem
