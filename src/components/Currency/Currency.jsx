import React from 'react'
import { useState } from 'react'
import css from './Currency.module.scss'
import Svg from '../../assets/images/Vector.png'
import { nanoid } from 'nanoid'



const currency = [
    {
        currency: 'USD',
        purchase: 28.55,
        sale:27.65
    },
     {
        currency: 'EUR',
        purchase: 30.05,
        sale:30.15
    },
      {
        currency: 'CHF',
        purchase: 86.15,
        sale: 86.23
    } 
]

const Row = (props) => {
    const { currency, purchase, sale } = props;   
    return (
        <tr>
            <td key={nanoid()} className={css.rows}>{currency}</td>
            <td key={nanoid()} className={css.rows}>{purchase}</td>
            <td key={nanoid()} className={css.rows}>{sale }</td>
    </tr>

)
}
const Table = (props) => {
    const { data } = props
    
    return (
        <table className={css.table}>
            <thead className={css.table_head}>
                <tr>
                <td key={nanoid()} className={css.header_table}>Currency</td>
                <td key={nanoid()} className={css.header_table}>Purchase</td>
                <td key={nanoid()} className={css.header_table}>Sale</td>
                </tr>
            </thead>
            <tbody>
            {data.map(row => (
                <Row key={nanoid()} currency={row.currency}
                purchase={row.purchase} sale={row.sale}/>
            ))} 
        </tbody>
   </table> 
)
}

const Currency = () => {
    const [rows, setRows] = useState(currency) 
 console.log(setRows)   
  return (
      <div className={css.currency}>
        
          <Table data={rows} />
            <img className={css.svg} src={Svg} alt="" />

    </div>
  )
}

export default Currency