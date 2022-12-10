// Таблиця для HomeTab з сортуванням
// Використання
// import SortableTable from 'components/SortableTable/SortableTable';
// ...
// <SortableTable data={transactions} />


import React from 'react';
import css from './SortableTable.module.scss';
import { nanoid } from 'nanoid';
import EllipsisText from 'react-ellipsis-text';

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
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === css.ascendingSort ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === css.ascendingSort ? 1 : -1;
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
  const { date, type, category, comment, sum, balance } = props;
  return (
    <tr className={css.trSortTable}>
      <td key={nanoid()} className={css.tdSortTable}>
        {date}
      </td>
      <td key={nanoid()} className={css.tdSortTable}>
        {type}
      </td>
      <td key={nanoid()} className={css.tdSortTable}>
        {category}
      </td>
      <td key={nanoid()} className={css.tdSortTable}>
        {<EllipsisText text={comment} length={13} />}
      </td>
      <td key={nanoid()} className={css.tdSortTable}>
        {sum}
      </td>
      <td key={nanoid()} className={css.tdSortTable}>
        {balance}
      </td>
    </tr>
  );
};

const SortableTable = props => {
  const { items, requestSort, sortConfig } = useSortableData(props.data);
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
              onClick={() => requestSort('type')}
              className={getClassNamesFor('type')}
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
              onClick={() => requestSort('sum')}
              className={getClassNamesFor('sum')}
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
            key={nanoid()}
            type={item.type}
            date={item.date}
            category={item.category}
            comment={item.comment}
            sum={item.sum}
            balance={item.balance}
          />
        ))}
      </tbody>
    </table>
  );
};

export default SortableTable;
