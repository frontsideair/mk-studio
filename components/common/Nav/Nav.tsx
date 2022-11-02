'use client'
import { gql } from '@apollo/client'
import Logo from '@components/ui/Logo'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { initializeApollo } from 'framework/client'
import MENU_QUERY from 'framework/data/queries/menuQuery'
import { FC } from 'react'

import DropDown from '../Dropdown/Dropdown'
import s from './Nav.module.css'

const Nav = ({ menu }) => {
  const items = menu?.[0]?.items
  return (
    <Disclosure as="nav" className={s.root}>
      {({ open }) => (
        <>
          <div className={s.wrap}>
            <div className={s.innerWrap}>
              <div className={s.mobileWrap}>
                <Disclosure.Button className={s.mobileButton}>
                  <span className={s.srOnly}>Open main menu</span>
                  {open ? (
                    <XMarkIcon className={s.mobileIcon} aria-hidden="true" />
                  ) : (
                    <Bars3Icon className={s.mobileIcon} aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className={s.menuBar}>
                <div className={s.logoWrap}>
                  <Logo className={s.logo} />
                </div>
                <div className={s.dropdownWrap}>
                  <div className={s.dropdownInnerWrap}>
                    <DropDown items={items} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className={s.mobileMenu}>
            <div className={s.mobileMenuInnerWrap}>
              <DropDown items={items} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Nav
