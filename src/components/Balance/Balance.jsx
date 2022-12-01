import React from 'react'
import css from './Balance.module.scss'
const Balance = () => {
  return (
      <div className={css.balance}>
          <p className={css.title}>YOUR BALANCE</p>
          <p className={css.text}>$24 000.00</p>
    </div>
  )
}

export default Balance