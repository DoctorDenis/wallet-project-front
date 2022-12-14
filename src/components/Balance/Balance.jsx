import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import css from './Balance.module.scss';
import { getCurrentUser } from 'redux/auth/auth-operations';

const Balance = () => {
  const bal = useSelector(state => state.auth.user.balance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={css.balance}>
        <p className={css.title}>YOUR BALANCE</p>
        {bal.toString() ? (
          <p className={css.text}> {`${bal.toFixed(2)}₴`}</p>
        ) : (
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        )}
      </div>
    </>
  );
};

export default Balance;
