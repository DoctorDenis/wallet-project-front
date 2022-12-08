import style from './button.module.scss';

const Button = ({ text, onClick }) => {
  return (
    <button className={style.btn} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
