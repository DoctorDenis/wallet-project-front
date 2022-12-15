import style from './buttonAddTransactions.module.scss';
import minus from '../../assets/images/Vectors.svg';
import vertical from '../../assets/images/Vector 5.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalStatus } from '../../redux/global/global-actions';

const ButtonAddTransactions = () => {
  const modalAddTransactionStatus = useSelector(
    state => state.global.isModalAddTransactionOpen
  );
  const dispatch = useDispatch();

  function onButtonClick() {
    dispatch(changeModalStatus(!modalAddTransactionStatus));
  }
  return (
    <div className={style.btn} onClick={onButtonClick}>
      <img className={style.vert} src={vertical} alt="vertical" />
      <img className={style.svg} src={minus} alt="minus" />
    </div>
  );
};

export default ButtonAddTransactions;
