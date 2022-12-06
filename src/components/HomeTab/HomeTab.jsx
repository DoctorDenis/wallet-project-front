import React from 'react';
import css from './HomeTab.module.scss';
// import { useState } from 'react'
import EllipsisText from 'react-ellipsis-text';
import { nanoid } from 'nanoid';
import Media from 'react-media';
import HomeTabMobile from 'components/HomeTabMobile/HomeTabMobile';
// import axios from '../../axios'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from 'redux/slices/transactions';



const currency = [
  {
    date: '04.01.19',
    type: '-',
    category: 'Other',
    comment: 'Gift dfddd for wife',
    sum: 3000,
    balance: 20000,
  },
  {
    date: '04.01.19',
    type: '+',
    category: 'Other',
    comment: 'Gift for wife on Marry Cristmas',
    sum: 3000,
    balance: 20000,
  },
  {
    date: '04.01.19',
    type: '+',
    category: 'Other',
    comment: 'Gift for wife',
    sum: 3000,
    balance: 20000,
  },
  {
    date: '04.01.19',
    type: '-',
    category: 'Other',
    comment: 'Giftsdfd for wife',
    sum: 3000,
    balance: 20000,
  },
  {
    date: '04.01.19',
    type: '-',
    category: 'Other',
    comment: 'Gift for wife',
    sum: 3000,
    balance: 20000,
  },
];

const Row = props => {
  const { date, type, category, comment, sum, balance } = props;
  return (
    <tr className={css.tr}>
      <td key={nanoid()} className={css.rows}>
        {date}
      </td>
      <td key={nanoid()} className={css.rows}>
        {type}
      </td>
      <td key={nanoid()} className={css.rows}>
        {category}
      </td>
      <td key={nanoid()} className={css.rows}>
        {comment}
      </td>
      <td key={nanoid()} className={css.rows}>
        {sum}
      </td>
      <td key={nanoid()} className={css.rows}>
        {balance}
      </td>
    </tr>
  );
};
const Table = props => {
  const { data } = props;

  return (
    <table className={css.table}>
     
      <thead className={css.table_head}>
        <tr>
          <td key={nanoid()} className={css.header_table}>
            Date
          </td>
          <td key={nanoid()} className={css.header_table}>
            Type
          </td>
          <td key={nanoid()} className={css.header_table}>
            Category
          </td>
          <td key={nanoid()} className={css.header_table}>
            Comment
          </td>
          <td key={nanoid()} className={css.header_table}>
            Sum
          </td>
          <td key={nanoid()} className={css.header_table}>
            Balance
          </td>
        </tr>
      </thead>
     
      <tbody className={css.table_body}>
        {data.map(row => (
          <Row
            className={css.tr}
            key={nanoid()}
            type={row.type}
            date={row.date}
            category={row.category}
            comment={<EllipsisText text={row.comment} length={13} />}
            sum={row.sum}
            balance={row.balance}
          />
        ))}
      </tbody>
     
    </table>
  );
};

const HomeTab = () => {
  const dispatch = useDispatch();
  const {transactions} = useSelector((state)=>state.transactions)
  
  useEffect(() => {
  dispatch(fetchTransactions())

},[dispatch])

console.log(transactions)

  return (
    <>
      <Media queries={{ mobile: { maxWidth: 767 } }}>
        {matches => matches.mobile && <HomeTabMobile />}
      </Media>

      <Media queries={{ table: { minWidth: 768 } }}>
        {matches =>
          matches.table && (
            <>
              <div className={css.home_tab}>
                <Table data={currency} />
              </div>
            </>
          )
        }
      </Media>
    </>

    //     <div className={css.backg}>
    //   <Container>
    //   <div className={css.home_tab}>
    //       <Table data={rows} />
    //         </div>
    //         </Container>
    //         </div>
  );
};

export default HomeTab;
