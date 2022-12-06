import React from 'react';
import Wallet from '../../assets/images/Wallet-min.svg';
import css from './Header.module.scss';
import Exit from '../../assets/images/Exit-min.svg';
import { Link } from 'react-router-dom';
import Container from 'components/Container/Container';

// import { useDispatch } from 'react-redux';
// import { logout } from '../../redux/auth/auth-operations';

const Header = ({ openModalLogout }) => {
  // const dispatch = useDispatch();
  return (
    <Container>
      <header className={css.header}>
        <Link className={css.header_right} to="/home">
          <img className={css.header_logo} src={Wallet} alt="wallet" />
          <h1 className={css.title}>Wallet</h1>
        </Link>
        <div className={css.header_left}>
          <p className={css.text}>Name</p>
          <img className={css.exit_svg} src={Exit} alt="exit" />
          {/* <button className={css.exit_button} onClick={() => dispatch(logout())}> */}
          <button className={css.exit_button} onClick={() => openModalLogout()}>
            Exit
          </button>
        </div>
      </header>
    </Container>
  );
};

export default Header;
