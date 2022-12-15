import React from 'react';
import css from './SortableTable.module.scss';
import { nanoid } from 'nanoid';
import EllipsisText from 'react-ellipsis-text';
import convertStringToDate from 'utils/convertStringToDate';
import Delete from '../../assets/images/delete-button-min.svg';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (sortConfig.key === 'date') {
          const newA = a[sortConfig.key].split('.').reverse().join('');
          const newB = b[sortConfig.key].split('.').reverse().join('');
          if (newA > newB) {
            return sortConfig.direction === css.ascendingSort ? -1 : 1;
          }
          if (newA < newB) {
            return sortConfig.direction === css.ascendingSort ? 1 : -1;
          }
        } else {
          if (sortConfig.key === 'amount' || sortConfig.key === 'balance') {
            return sortConfig.direction === css.ascendingSort
              ? b[sortConfig.key] - a[sortConfig.key]
              : a[sortConfig.key] - b[sortConfig.key];
          } else {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === css.ascendingSort ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === css.ascendingSort ? 1 : -1;
            }
          }
        }

        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = key => {
    let direction = css.ascendingSort;
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === css.ascendingSort
    ) {
      direction = css.descendingSort;
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const Row = props => {
  const {
    date,
    isIncome,
    category,
    comment,
    amount,
    balance,
    deleteTrans,
    id,
  } = props;
  return (
    <tr className={css.trSortTable}>
      <td key={nanoid()} className={css.tdSortTable}>
        {convertStringToDate(date)}
      </td>
      <td key={nanoid()} className={isIncome ? css.rows_true : css.rows_false}>
        {isIncome ? '+' : '-'}
      </td>
      <td key={nanoid()} className={css.tdSortTable}>
        {<EllipsisText text={category} length={10} />}
      </td>
      <td key={nanoid()} className={css.tdSortTable}>
        {<EllipsisText text={comment} length={13} />}
      </td>
      <td key={nanoid()} className={isIncome ? css.rows_true : css.rows_false}>
        {amount}
      </td>
      <td key={nanoid()} className={css.tdSortTable}>
        {balance}
      </td>
      <td
        key={nanoid()}
        onClick={() => deleteTrans(id)}
        className={css.tdSortTable}
      >
        <img className={css.delete_icon} src={Delete} alt="delete" />
      </td>
    </tr>
  );
};

const SortableTable = props => {
  const { items, requestSort, sortConfig } = useSortableData(props.data);
  const { deleteTrans } = props;
  const getClassNamesFor = name => {
    if (!sortConfig) {
      return css.noneSort;
    }
    return sortConfig.key === name ? sortConfig.direction : css.noneSort;
  };
  return (
    <table>
      <thead className={css.theadSortTable}>
        <tr>
          <th className={css.thSortTable}>
            <button
              type="button"
              onClick={() => requestSort('date')}
              className={getClassNamesFor('date')}
            >
              Date
            </button>
          </th>
          <th className={css.thSortTable}>
            <button
              type="button"
              onClick={() => requestSort('isIncome')}
              className={getClassNamesFor('isIncome')}
            >
              Type
            </button>
          </th>
          <th className={css.thSortTable}>
            <button
              type="button"
              onClick={() => requestSort('category')}
              className={getClassNamesFor('category')}
            >
              Category
            </button>
          </th>
          <th className={css.thSortTable}>
            <button
              type="button"
              onClick={() => requestSort('comment')}
              className={getClassNamesFor('comment')}
            >
              Comment
            </button>
          </th>
          <th className={css.thSortTable}>
            <button
              type="button"
              onClick={() => requestSort('amount')}
              className={getClassNamesFor('amount')}
            >
              Sum
            </button>
          </th>
          <th className={css.thSortTable}>
            <button
              type="button"
              onClick={() => requestSort('balance')}
              className={getClassNamesFor('balance')}
            >
              Balance
            </button>
          </th>
        </tr>
      </thead>
      <tbody className={css.bodySortTable}>
        {items.map(item => (
          <Row
            id={item._id}
            key={nanoid()}
            isIncome={item.isIncome}
            date={item.date}
            category={item.category}
            comment={item.comment}
            amount={item.amount}
            balance={item.balance}
            deleteTrans={deleteTrans}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;
