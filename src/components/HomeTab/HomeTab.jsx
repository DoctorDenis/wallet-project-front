import React from 'react';
import css from './HomeTab.module.scss';
import { nanoid } from 'nanoid';
import Media from 'react-media';
import HomeTabMobile from 'components/HomeTabMobile/HomeTabMobile';
import NotTransactions from '../../assets/images/Not.png';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransaction } from '../../redux/transaction/transaction-operations';
import convertStringToDate from 'utils/convertStringToDate';
import Delete from '../../assets/images/delete-button-min.svg';
import { deleteTransaction } from 'redux/transaction/transaction-operations';

const Table = props => {
  const { data, deleteTrans } = props;
  return (
    <table className={css.table}>
      <thead className={css.table_head}>
        <tr className={css.tr_head}>
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
            <td key={nanoid()} className={css.rows_com}>
              {row.category}
            </td>
            <td key={nanoid()} className={css.rows_com}>
              {row.comment}
            </td>
            <td
              key={nanoid()}
              className={row.isIncome ? css.rows_true : css.rows_false}
            >
              {row.amount.toFixed(2)}
            </td>
            <td key={nanoid()} className={css.rows}>
              {row.balance.toFixed(2)}
            </td>

            <td
              key={nanoid()}
              onClick={() => deleteTrans(row._id)}
              className={css.rows_del}
            >
              <img className={css.delete_icon} src={Delete} alt="delete" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const HomeTab = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

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
    if (query === '') {
      reverseTransactions = [...transactions];
    } else {
      if (query === '+' || query === '-') {
        reverseTransactions = transactions.filter(el => {
          if (el.isIncome && query === '+') {
            return true;
          } else if (!el.isIncome && query === '-') {
            return true;
          } else {
            return false;
          }
        });
      } else if (!isNaN(Number(query))) {
        reverseTransactions = transactions.filter(el => {
          if (el.amount.toString().includes(query)) {
            return el;
          } else {
            return false;
          }
        });
      } else if (isNaN(Number(query))) {
        reverseTransactions = transactions.filter((el, ind, arr) => {
          if (
            el.category.toLowerCase().includes(query.toLowerCase()) ||
            el.comment.toLowerCase().includes(query.toLowerCase())
          ) {
            return el;
          } else {
            return false;
          }
        });
      }
    }
  }

  const sortArr = () => {
    reverseTransactions?.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
  };
  sortArr();

  const deleteTrans = id => {
    dispatch(deleteTransaction(id));
  };

  return (
    <>
      {transactions && transactions.length > 0 && (
        <input
          placeholder="Search"
          className={css.input_search}
          value={query}
          type={'text'}
          onChange={e => {
            setQuery(e.currentTarget.value);
          }}
        />
      )}
      {status ? (
        <div className={css.spiner}>
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : reverseTransactions?.length === 0 && query === '' ? (
        <div className={css.not_trans}>
          <img src={NotTransactions} alt="" />
        </div>
      ) : reverseTransactions?.length === 0 && query !== '' ? (
        <h5 className={css.search_message}>
          There are no transactions that match '{query}' search query
        </h5>
      ) : (
        <>
          <Media queries={{ mobile: { maxWidth: 767 } }}>
            {matches => matches.mobile && <HomeTabMobile query={query} />}
          </Media>

          <Media queries={{ table: { minWidth: 768 } }}>
            {matches =>
              matches.table && (
                <>
                  <div className={css.home_tab}>
                    <Table
                      deleteTrans={deleteTrans}
                      data={reverseTransactions}
                    />
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
