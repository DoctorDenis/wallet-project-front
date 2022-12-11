import { Component } from 'react';

import styles from './TotalSum.module.scss';

let earned;
let spent;

export default class TotalSum extends Component {
  parseData(arr) {
    arr?.map(item => {
      if (item.spent) {
        spent = item.spent;
      } else if (item.earned) {
        earned = item.earned;
      }
      return 0;
    });
  }

  render() {
    let totalSums = this.props.totalSums.sums;
    this.parseData(totalSums);
    return (
      <div className={styles.block}>
        {totalSums && (
          <>
            <div className={styles.blockSum}>
              <p>Expenses:</p>
              <p className={styles.sumExpenses}>
                {/* {totalSums[0]?.spent ? totalSums[0]?.spent : 0} */}
                {spent || 0}
              </p>
            </div>
            <div className={styles.blockSum}>
              <p>Income:</p>
              <p className={styles.sumIncome}>
                {/* {totalSums[1]?.earned ? totalSums[1].earned : 0} */}
                {earned || 0}
              </p>
            </div>
          </>
        )}
      </div>
    );
  }
}
