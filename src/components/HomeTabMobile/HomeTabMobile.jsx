// import Container from 'components/Container/Container'
import React from 'react'
import css from './HomeTabMobile.module.scss'


const HomeTabMobile = () => {
  
  return (
<div className={css.mobile_table}>
    <div className={css.table}>
<ul className={css.transaction}>
        <li className={css.transactions}>
          <p className={css.name}>Date</p>
          <p className={css.value}>04.01.19</p>
        </li>
        <li className={css.transactions}>
          <p className={css.name}>Type</p>
          <p className={css.value}>-</p>
        </li>
        <li className={css.transactions}>
          <p className={css.name}>Category</p>
          <p className={css.value}>Other</p>
        </li>
        <li className={css.transactions}>
          <p className={css.name}>Comment</p>
          <p className={css.value}>Gift for wife</p>
        </li>
        <li className={css.transactions}>
          <p className={css.name}>Sum</p>
          <p className={css.value}>300</p>
        </li>
        <li className={css.transactions}>
          <p className={css.name}>Balance</p>
          <p className={css.value}>6 900.00</p>
      </li>
      </ul>

    </div>

    <div className={css.table}>
<ul className={css.transaction}>
        <li className={css.transactions}>
          <p className={css.name}>Date</p>
          <p className={css.value}>04.01.19</p>
        </li>
        <li className={css.transactions}>
          <p className={css.name}>Type</p>
          <p className={css.value}>-</p>
        </li>
        <li className={css.transactions}>
          <p className={css.name}>Category</p>
          <p className={css.value}>Other</p>
        </li>
        <li className={css.transactions}>
          <p className={css.name}>Comment</p>
          <p className={css.value}>Gift for wife</p>
        </li>
        <li className={css.transactions}>
          <p className={css.name}>Sum</p>
          <p className={css.value}>300</p>
        </li>
        <li className={css.transactions}>
          <p className={css.name}>Balance</p>
          <p className={css.value}>6 900.00</p>
      </li>
      </ul>

    </div>
    </div>
      
    
  
  )
}

export default HomeTabMobile