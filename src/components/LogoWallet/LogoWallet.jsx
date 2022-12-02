import style from './LogoWallet.module.scss';

const LogoWallet = () => {
  return (
    <div className={style.container}>
      <svg className={style.svg}></svg>
      <span className={style.text}>Wallet</span>
    </div>
  );
};

export default LogoWallet;
