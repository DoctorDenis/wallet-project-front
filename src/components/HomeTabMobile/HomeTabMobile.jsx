import EllipsisText from 'react-ellipsis-text';
import React from 'react';
import css from './HomeTabMobile.module.scss';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

const HomeTabMobile = () => {
  const transactions = useSelector(
    state => state.transactions.transactions.transactions
  );
  const status = useSelector(state => state.transactions.isLoading);

  let reverseTransactions = [];
  const reverseArr = () => {
    transactions?.map(post => {
      reverseTransactions.unshift(post);
      return reverseTransactions;
    });
  };
  reverseArr();

  return status === 'loading' ? (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only"></span>
    </div>
  ) : (
    <div className={css.mobile_table}>
      {reverseTransactions?.map(item => (
        <div key={nanoid()} className={css.table}>
          <ul key={nanoid()} className={css.transaction}>
            <li
              key={nanoid()}
              className={
                item.isIncome ? css.transactions_true : css.transactions_false
              }
            >
              <p className={css.name}>Date</p>
              <p className={css.value}>{item.date}</p>
            </li>
            <li
              key={nanoid()}
              className={
                item.isIncome ? css.transactions_true : css.transactions_false
              }
            >
              <p className={css.name}>Type</p>
              <p
                className={
                  item.isIncome ? css.value_income_true : css.value_income_false
                }
              >
                {item.isIncome ? '+' : '-'}
              </p>
            </li>
            <li
              key={nanoid()}
              className={
                item.isIncome ? css.transactions_true : css.transactions_false
              }
            >
              <p className={css.name}>Category</p>
              <p className={css.value}>
                {<EllipsisText text={item.category} length={8} />}
              </p>
            </li>
            <li
              key={nanoid()}
              className={
                item.isIncome ? css.transactions_true : css.transactions_false
              }
            >
              <p className={css.name}>Comment</p>
              <p className={css.value}>
                {<EllipsisText text={item.comment} length={8} />}
              </p>
            </li>
            <li
              key={nanoid()}
              className={
                item.isIncome ? css.transactions_true : css.transactions_false
              }
            >
              <p className={css.name}>Sum</p>
              <p
                className={
                  item.isIncome ? css.value_income_true : css.value_income_false
                }
              >
                {item.amount}
              </p>
            </li>
            <li
              key={nanoid()}
              className={
                item.isIncome ? css.transactions_true : css.transactions_false
              }
            >
              <p className={css.name}>Balance</p>
              <p className={css.value}>6 900.00</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HomeTabMobile;
