import EllipsisText from 'react-ellipsis-text';
import React from 'react'
import css from './HomeTabMobile.module.scss'
import { useSelector } from 'react-redux'
import {nanoid} from 'nanoid';



const HomeTabMobile = () => {
  const {transactions} = useSelector((state)=>state.transactions.items)

  
  return (
    <div className={css.mobile_table}>
      {transactions?.map((item) => (
         <div key={nanoid()} className={css.table}>
<ul key={nanoid()} className={css.transaction}>
        <li key={nanoid()} className={item.isIncome ? css.transactions_true : css.transactions_false}>
          <p className={css.name}>Date</p>
          <p className={css.value}>{item.date}</p>
        </li>
        <li key={nanoid()} className={item.isIncome ? css.transactions_true : css.transactions_false}>
          <p className={css.name}>Type</p>
              <p className={item.isIncome ? css.value_income_true : css.value_income_false}>{item.isIncome ? '+' : '-' }</p>
        </li>
        <li key={nanoid()} className={item.isIncome ? css.transactions_true : css.transactions_false}>
          <p className={css.name}>Category</p>
              <p className={css.value}>{<EllipsisText text={item.category} length={8} />}</p>
        </li>
        <li key={nanoid()} className={item.isIncome ? css.transactions_true : css.transactions_false}>
          <p className={css.name}>Comment</p>
              <p className={css.value}>{<EllipsisText text={item.comment} length={8} />}</p>
        </li>
        <li key={nanoid()} className={item.isIncome ? css.transactions_true : css.transactions_false}>
          <p className={css.name}>Sum</p>
              <p className={item.isIncome ? css.value_income_true : css.value_income_false}>{item.amount}</p>
        </li>
        <li key={nanoid()} className={item.isIncome ? css.transactions_true : css.transactions_false}>
          <p className={css.name}>Balance</p>
          <p className={css.value}>6 900.00</p>
      </li>
      </ul>

    </div>
      ))}
   
    </div>
      
    
  
  )
}

export default HomeTabMobile