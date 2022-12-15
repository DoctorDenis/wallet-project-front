import React from 'react';
import { useEffect } from 'react';
import css from './HomeTabMobile.module.scss';
import convertStringToDate from 'utils/convertStringToDate';
import { useSelector, useDispatch } from 'react-redux';
import Delete from '../../assets/images/delete-button-min.svg';
import { nanoid } from 'nanoid';
import { deleteTransaction } from 'redux/transaction/transaction-operations';

const HomeTabMobile = ({ query }) => {
  const dispatch = useDispatch();

  const transactions = useSelector(
    state => state.transactions.transactions.transactions
  );

  useEffect(() => {}, [transactions]);

  const status = useSelector(state => state.transactions.isLoading);

  let reverseTransactions = [];

  if (transactions) {
    if (query === '') {
      reverseTransactions = [...transactions];
    } else {
      if (query === '+' || query === '-') {
        reverseTransactions = transactions.filter(el => {
          if (el.isIncome && query === '+') {
            return true;
          } else if (!el.isIncome && query === '-') {
            return true;
          } else {
            return false;
          }
        });
      } else if (!isNaN(Number(query))) {
        reverseTransactions = transactions.filter(el => {
          if (el.amount.toString().includes(query)) {
            return el;
          } else {
            return false;
          }
        });
      } else if (isNaN(Number(query))) {
        reverseTransactions = transactions.filter((el, ind, arr) => {
          if (
            el.category.toLowerCase().includes(query.toLowerCase()) ||
            el.comment.toLowerCase().includes(query.toLowerCase())
          ) {
            return el;
          } else {
            return false;
          }
        });
      }
    }
  }

  const sortArr = () => {
    reverseTransactions?.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  };
  sortArr();

  const deleteTrans = id => {
    dispatch(deleteTransaction(id));
  };

  return status ? (
    <div className="spinner-border text-center " role="status">
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
              <p className={css.value}>{convertStringToDate(item.date)}</p>
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
              <p className={css.value_com}>{item.category}</p>
            </li>
            <li
              key={nanoid()}
              className={
                item.isIncome ? css.transactions_true : css.transactions_false
              }
            >
              <p className={css.name}>Comment</p>
              <p className={css.value_com}>{item.comment}</p>
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
                {item.amount.toFixed(2)}
              </p>
            </li>
            <li
              key={nanoid()}
              className={
                item.isIncome ? css.transactions_true : css.transactions_false
              }
            >
              <p className={css.name}>Balance</p>
              <p className={css.value}>{item.balance.toFixed(2)}</p>
            </li>
            <li
              onClick={() => deleteTrans(item._id)}
              key={nanoid()}
              className={
                item.isIncome ? css.transactions_true : css.transactions_false
              }
            >
              <img className={css.delete} src={Delete} alt="delete" />
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default HomeTabMobile;
