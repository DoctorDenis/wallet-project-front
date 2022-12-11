import { Component } from 'react';
// import { nanoid } from 'nanoid';
import { getCategories } from '../../services/getCategories';

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
    console.log('this.props.statisctics:', this.props.statisctics);
    let statisctics = this.props.statisctics;
    // let data = getCategories();
    // console.log('data:', data);
    return (
      <div>
        <div className={styles.titleTable}>
          <p>Category</p>
          <p>Sum</p>
        </div>
        <ul>
          {statisctics?.map(statisctic => (
            <li className={styles.item} key={statisctic._id}>
              <div className={styles.square}></div>
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
