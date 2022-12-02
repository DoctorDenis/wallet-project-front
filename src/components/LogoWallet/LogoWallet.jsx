import logoWallet from '../../assets/images/Wallet-min.svg';
import style from './LogoWallet.module.scss';

const LogoWallet = () => {
  return (
    <div className={style.container}>
      <img className={style.logo} src={logoWallet} alt="wallet" />
      <span className={style.text}>Wallet</span>
    </div>
  );
};

export default LogoWallet;
