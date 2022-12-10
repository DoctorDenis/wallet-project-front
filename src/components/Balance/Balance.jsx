import React from 'react';
import { useState } from 'react';

import css from './Balance.module.scss';
import axios from 'axios';
import { useEffect } from 'react';

const Balance = () => {

  const [balance, setBalance] = useState('');

  const token = JSON.parse(
    JSON.parse(localStorage.getItem('persist:token')).accesToken
  );

  useEffect(() => {
    axios
      .get('https://wallet-project.cyclic.app/users/current', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(res => setBalance(res.data))
      .catch(err => {
        throw err;
      });
  }, [token]);



  return (
    <>
      <div className={css.balance}>
        <p className={css.title}>YOUR BALANCE</p>
        {balance ? <p className={css.text}> {`$${balance?.data?.user?.balance}`}</p> :  <div className="spinner-border text-primary" role="status">
  <span className="sr-only"></span>
</div>}
        {/* <p className={css.text}> {`$${balance?.data?.user?.balance}`}</p> */}
      </div>
    </>
  );
};

export default Balance;
