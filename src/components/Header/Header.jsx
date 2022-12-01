import React from 'react'
import Wallet from '../../assets/images/Wallet-min.svg'
import css from './Header.module.scss'
import Exit from '../../assets/images/Exit-min.svg'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
      <div className={css.header}>
          
              <Link className={css.header_right} to='/home'>
              <img className={css.header_logo} src={Wallet} alt="wallet" />
              <h1 className={css.title}>Wallet</h1>
              </Link>
          
          <div className={css.header_left}>
              <p className={css.text}>Name</p>
              <img className={css.exit_svg} src={Exit} alt="exit" />
              <button className={css.exit_button}>Exit</button>
          </div>
      </div>
  )
}

export default Header

