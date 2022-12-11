import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { getCategories } from '../../services/getCategories';
import { colorsExpenses } from '../../utils/colorsExpenses';

import styles from './ProductСategories.module.scss';

export default class ProductСategories extends Component {
  state = {
    categories: null,
  };

  // componentDidMount() {
  //   this.writeCategory();
  // }

  // writeCategory() {
  //   this.setState({
  //     categories: getCategories(),
  //   });
  // }

  render() {
    let statisctics = this.props.statisctics;

    return (
      <div>
        <div className={styles.titleTable}>
          <p>Category</p>
          <p>Sum</p>
        </div>
        <ul>
          {statisctics?.map((statisctic, index) => (
            <li className={styles.item} key={statisctic._id}>
              <div
                className={styles.square}
                // style={{ color: colorsExpenses(index) }}
                style={{ backgroundColor: `${colorsExpenses[index]}` }}
              ></div>
              <div className={styles.itemExpenses}>
                <p>{statisctic._id}</p>
                <p>{statisctic.total}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
