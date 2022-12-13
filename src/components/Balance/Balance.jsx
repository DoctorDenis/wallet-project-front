import React from 'react';

import { useSelector } from 'react-redux';
import css from './Balance.module.scss';


const Balance = () => {

  const bal = useSelector(state => state.auth.user.balance);
// console.log(bal)

  return (
    <>
      <div className={css.balance}>
        <p className={css.title}>YOUR BALANCE</p>
        {bal >=0 ? (
          <p className={css.text}> {`${bal}₴`}</p>
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        )}
        {/* <p className={css.text}> {`$${balance?.data?.user?.balance}`}</p> */}
      </div>
    </>
  );
};

export default Balance;
