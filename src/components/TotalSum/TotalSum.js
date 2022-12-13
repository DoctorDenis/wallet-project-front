import { Component } from 'react';

import styles from './TotalSum.module.scss';

export default class TotalSum extends Component {
  render() {
    let totalSums = this.props.totalSums;

    return (
      <div className={styles.block}>
        {totalSums && (
          <>
            <div className={styles.blockSum}>
              <p>Expenses:</p>
              <p className={styles.sumExpenses}>{totalSums.spent}</p>
            </div>
            <div className={styles.blockSum}>
              <p>Income:</p>
              <p className={styles.sumIncome}>{totalSums.earned}</p>
            </div>
          </>
        )}
      </div>
    );
  }
}
