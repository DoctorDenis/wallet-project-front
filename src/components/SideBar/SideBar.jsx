import React from 'react'
import Navigation from 'components/Navigation/Navigation'
import css from './SideBar.module.scss'
import Balance from 'components/Balance/Balance'
import Currency from 'components/Currency/Currency'
const SideBar = () => {
  return (
    <div className={css.sidebar}>
          <Navigation />
          <Balance />
          <Currency/>
    </div>
  )
}

export default SideBar
