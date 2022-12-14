import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Container from 'components/Container/Container';
import Header from '../../components/Header/Header';
import css from './DashboardPage.module.scss';
import { useLocation } from 'react-router-dom';
import Media from 'react-media';
import Navigation from 'components/Navigation/Navigation';
import Balance from 'components/Balance/Balance';
import ButtonAddTransactions from 'components/ButtonAddTransactions/ButtonAddTransactions';
import Currency from 'components/Currency/Currency';
import CurrencyHome from 'components/CurrencyHome/CurrencyHome';
import HomeTab from 'components/HomeTab/HomeTab';
import StatisticsDiagram from 'components/StatisticsDiagram/StatisticsDiagram';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import ModalAddTransactions from 'components/ModalAddTransaction/ModalAddTransaction';
import { changeModalStatus } from '../../redux/global/global-actions';

const DashboardPage = () => {
  const location = useLocation();
  const path = location.pathname;
  const [modalLogout, setModalLogout] = useState(false);

  const modalAddTransactionStatus = useSelector(
    state => state.global.isModalAddTransactionOpen
  );

  const dispatch = useDispatch();

  const togleModal = () => {
    dispatch(changeModalStatus(!modalAddTransactionStatus));
  };

  return (
    <>
      <Header openModalLogout={() => setModalLogout(true)} />
      <ModalLogout
        isOpened={modalLogout}
        closeModal={() => setModalLogout(false)}
      />
      <div className={css.backg}>
        <Container>
          <Navigation />
          <Media
            queries={{
              mobile: { maxWidth: 767 },
              other: { minWidth: 768 },
            }}
          >
            {matches => {
              return (
                <Fragment>
                  {matches.mobile && path === '/home' && <Balance />}
                  {matches.other && <Balance />}
                </Fragment>
              );
            }}
          </Media>

          <Media queries={{ mobile: { maxWidth: 767 } }}>
            {matches =>
              matches.mobile && (
                <>{location.pathname === '/currency' && <Currency />}</>
              )
            }
          </Media>

          <Media queries={{ table: { minWidth: 768 } }}>
            {matches => matches.table && <CurrencyHome />}
          </Media>

          <hr className={css.vertical} />
          <>
            {location.pathname === '/home' && <HomeTab />}
            {location.pathname === '/statistics' && <StatisticsDiagram />}
          </>

          {location.pathname === '/home' && <ButtonAddTransactions />}
          {modalAddTransactionStatus && (
            <ModalAddTransactions onClose={togleModal} />
          )}
        </Container>
      </div>
    </>
  );
};

export default DashboardPage;
