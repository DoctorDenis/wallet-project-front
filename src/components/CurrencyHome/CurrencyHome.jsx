import React from 'react';
import css from './CurrencyHome.module.scss';
import Svg from '../../assets/images/Vector.png';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import axios from 'axios'




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
        {data?.map(row => (
          <Row 
            key={nanoid()}
            currency={row.currencyCodeA===840 ? "USD" : "EUR"}
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
  
   axios
      .get(`https://api.monobank.ua/bank/currency`)
   .then((res) => {
       
       localStorage.setItem('currency', JSON.stringify(res.data.slice(0, 2)));
      // console.log( localStorage.setItem('currency', JSON.stringify(res.data.slice(0, 2))))
   })
      .catch(err => {
      
        throw err
        
      });
  
  
  
  setCurrency(JSON.parse(localStorage.getItem('currency')))
},[])



  return (
                <div className={css.currency_tab}>
                  <Table data={currency} />
                    <img className={css.svg} src={Svg} alt="svg" /> 
        </div>
        );
};

export default Currency;