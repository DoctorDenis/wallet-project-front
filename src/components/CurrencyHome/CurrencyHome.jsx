import React from 'react';
import css from './CurrencyHome.module.scss';
import Svg from '../../assets/images/Vector.png';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Row = props => {
  const { currency, purchase, sale } = props;
  return (
    <tr>
      <td key={nanoid()} className={css.rows}>
        {currency}
      </td>
      <td key={nanoid()} className={css.rows}>
        {purchase}
      </td>
      <td key={nanoid()} className={css.rows}>
        {sale}
      </td>
    </tr>
  );
};
const Table = props => {
  const { data } = props;

  return (
    <table className={css.table}>
      <thead className={css.table_head}>
        <tr className={css.tr}>
          <td key={nanoid()} className={css.header_table}>
            Currency
          </td>
          <td key={nanoid()} className={css.header_table}>
            Purchase
          </td>
          <td key={nanoid()} className={css.header_table}>
            Sale
          </td>
        </tr>
      </thead>
      <tbody className={css.body}>
        {data?.map((row, i) => (
          <Row
            key={nanoid()}
            currency={
              (i === 0 && 'USD') || (i === 1 && 'EUR') || (i === 2 && 'EUR/USD')
            }
            purchase={row.rateBuy.toFixed(2)}
            sale={row.rateSell.toFixed(2)}
          />
        ))}
      </tbody>
    </table>
  );
};

const Currency = () => {
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const curr = JSON.parse(localStorage.getItem('currency'));
    if (!curr) {
      axios
        .get(`https://wallet-project.cyclic.app/currency`)
        .then(res => {
          if (res.data.length) {
            localStorage.setItem('currency', JSON.stringify(res.data));

            res?.data
              ? setCurrency(res.data)
              : setCurrency(JSON.parse(localStorage.getItem('currency')));
          }
        })
        .catch(err => {
          throw err;
        });

      setCurrency(JSON.parse(localStorage.getItem('currency')));
    }
    setCurrency(JSON.parse(localStorage.getItem('currency')));
  }, []);

  return (
    <div className={css.currency_tab}>
      <Table data={currency} />
      <img className={css.svg} src={Svg} alt="svg" />
    </div>
  );
};

export default Currency;
