import React from 'react';
// import { useState } from 'react';
import { useSelector } from 'react-redux';
import css from './Balance.module.scss';
// import axios from 'axios';
// import { useEffect } from 'react';

const Balance = () => {
  // const [balance, setBalance] = useState('');

  const bal = useSelector(state => state.auth.user.balance);
  // console.log('balance: ', balance);

  // useEffect(() => {
  //   const token = JSON.parse(
  //     JSON.parse(localStorage.getItem('persist:token')).accesToken
  //   );
  //   (async function () {
  //     axios
  //       .get('https://wallet-project.cyclic.app/users/current', {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then(res => setBalance(res.data.user.balance))
  //       .catch(err => {
  //         throw err;
  //       });
  //   })();
  // }, []);

  return (
    <>
      <div className={css.balance}>
        <p className={css.title}>YOUR BALANCE</p>
        {bal ? (
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
