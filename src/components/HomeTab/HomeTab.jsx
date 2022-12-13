import React from 'react';
import css from './HomeTab.module.scss';
import EllipsisText from 'react-ellipsis-text';
import { nanoid } from 'nanoid';
import Media from 'react-media';
import HomeTabMobile from 'components/HomeTabMobile/HomeTabMobile';
import NotTransactions from '../../assets/images/Not.png';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransaction } from '../../redux/transaction/transaction-operations';
import convertStringToDate from 'utils/convertStringToDate';

const Table = props => {
  const { data } = props;
  return (
    <table className={css.table}>
      <thead className={css.table_head}>
        <tr>
          <td key={nanoid()} className={css.header_table}>
            Date
          </td>
          <td key={nanoid()} className={css.header_table}>
            Type
          </td>
          <td key={nanoid()} className={css.header_table}>
            Category
          </td>
          <td key={nanoid()} className={css.header_table}>
            Comment
          </td>
          <td key={nanoid()} className={css.header_table}>
            Sum
          </td>
          <td key={nanoid()} className={css.header_table}>
            Balance
          </td>
        </tr>
      </thead>

      <tbody className={css.table_body}>
        {data?.map(row => (
          <tr key={nanoid()} className={css.tr}>
            <td key={nanoid()} className={css.rows}>
              {convertStringToDate(row.date)}
            </td>
            <td
              key={nanoid()}
              className={row.isIncome ? css.rows_true : css.rows_false}
            >
              {row.isIncome ? '+' : '-'}
            </td>
            <td key={nanoid()} className={css.rows}>
              {<EllipsisText text={row.category} length={10} />}
            </td>
            <td key={nanoid()} className={css.rows}>
              {<EllipsisText text={row.comment} length={13} />}
            </td>
            <td
              key={nanoid()}
              className={row.isIncome ? css.rows_true : css.rows_false}
            >
              {row.amount}
            </td>
            <td key={nanoid()} className={css.rows}>
              {row.balance}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const HomeTab = () => {
  const dispatch = useDispatch();

  const transactions = useSelector(
    state => state.transactions.transactions.transactions
  );
  const status = useSelector(state => state.transactions.isLoading);
  useEffect(() => {
    (async function () {
      dispatch(getTransaction());
    })();

  }, [dispatch]);


  let reverseTransactions = [];

  if (transactions) {
    reverseTransactions = [...transactions];
  }

  const sortArr = () => {
    reverseTransactions?.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  };
  sortArr();

  return (
    <>
      {status ? (
       <div className="d-flex justify-content-center">
  <div className="spinner-border" role="status">
    <span className="sr-only"></span>
  </div>
</div>
      ) : reverseTransactions?.length === 0 ? (
        <div className={css.not_trans}>
          <img src={NotTransactions} alt="" />
        </div>
      ) : (
        <>
          <Media queries={{ mobile: { maxWidth: 767 } }}>
            {matches => matches.mobile && <HomeTabMobile />}
          </Media>

          <Media queries={{ table: { minWidth: 768 } }}>
            {matches =>
              matches.table && (
                <>
                  <div className={css.home_tab}>
                    <Table data={reverseTransactions} />
                  </div>
                </>
              )
            }
          </Media>
        </>
      )}

    
    </>
  );
};

export default HomeTab;
