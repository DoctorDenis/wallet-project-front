import { Component } from 'react';

import styles from './TotalSum.module.scss';

export default class TotalSum extends Component {
  render() {
    return (
      <div className={styles.block}>
        <div className={styles.blockSum}>
          <p>Expenses:</p>
          <p className={styles.sumExpenses}>22 549.24</p>
        </div>
        <div className={styles.blockSum}>
          <p>Income:</p>
          <p className={styles.sumIncome}>27 350.00</p>
        </div>
      </div>
    );
  }
}
