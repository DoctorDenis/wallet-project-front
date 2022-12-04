import { Component } from 'react';
import { nanoid } from 'nanoid';

import styles from './ProductСategories.module.scss';

export default class ProductСategories extends Component {
  render() {
    return (
      <div>
        <div className={styles.titleTable}>
          <p>Category</p>
          <p>Sum</p>
        </div>
        <ul>
          <li className={styles.item}>
            <div className={styles.square}></div>
            <div className={styles.itemExpenses}>
              <p>Basic expenses</p>
              <p>500</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.square}></div>
            <div className={styles.itemExpenses}>
              <p>Basic expenses</p>
              <p>500</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.square}></div>
            <div className={styles.itemExpenses}>
              <p>Self care</p>
              <p>15500</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.square}></div>
            <div className={styles.itemExpenses}>
              <p>Basic expenses</p>
              <p>500</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.square}></div>
            <div className={styles.itemExpenses}>
              <p>Basic expenses</p>
              <p>500</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.square}></div>
            <div className={styles.itemExpenses}>
              <p>Basic expenses</p>
              <p>500</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.square}></div>
            <div className={styles.itemExpenses}>
              <p>Basic expenses</p>
              <p>500</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.square}></div>
            <div className={styles.itemExpenses}>
              <p>Basic expenses</p>
              <p>500</p>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.square}></div>
            <div className={styles.itemExpenses}>
              <p>Basic expenses</p>
              <p>500</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
