import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import Datetime from 'react-datetime';
import moment from 'moment';
import Select from 'react-select';
import Switch from 'react-switch';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Notify } from 'notiflix';

import Button from '../Button/Button';
import ButtonActive from '../ButtonActive/ButtonActive';

import { expenseOptions } from '../../utils/expenseOptions';
import { incomeOptions } from '../../utils/incomeOptions';

import { selectStyles } from '../../helpers/styles/selectStyles';
import { selectDefaultColor } from '../../helpers/styles/selectDefaultColor';
import { addTransaction } from '../../redux/transaction/transaction-operations';

import transactionsSchema from '../../shared/schemas/transactionsSchema';

import minus from '../../assets/images/Vectors.svg';
import vertical from '../../assets/images/Vector 5.svg';
import close from '../../assets/images/Close-min.svg';
import calendar from '../../assets/images/date.svg';

import { changeModalStatus } from '../../redux/global/global-actions';

import './react-datetime.css';
import style from './modalAddTransaction.module.scss';

const modalRoot = document.querySelector('#modal-root');

const initialValues = {
  category: '',
  amount: '',
  date: '',
  comment: '',
};

const currentDate = moment();

const ModalAddTransactions = ({ onClose }) => {
  const [income, setIncome] = useState(false);
  const [select, setSelect] = useState('');

  const balance = useSelector(state => state.auth.user.balance);

  const [dateA, setDate] = useState('');

  const dispatch = useDispatch();

  const handlClose = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleChangeSwitch = () => {
    setIncome(!income);
  };

  const modalAddTransactionStatus = useSelector(
    state => state.global.isModalAddTransactionOpen
  );

  const handleSubmit = ({ amount, comment }, { resetForm }) => {
    if (balance < amount && !income) {
      Notify.warning('You have not enough money on your balance');
    } else {
      dispatch(
        addTransaction({
          isIncome: income,
          category: select,
          amount: Number(amount.toFixed(2)),
          date: dateA ? dateA : currentDate,
          comment: comment || 'No comment',
        })
      );
      resetForm();
      dispatch(changeModalStatus(!modalAddTransactionStatus));
    }
  };

  const handleChangeSelect = event => {
    setSelect(event.label);
  };

  const handleChangeDate = date => {
    setDate(date.format('M-D-YYYY'));
  };

  const isValidDate = currentDate => {
    const tomorrowMoment = moment().add(0, 'day');
    return currentDate.isBefore(tomorrowMoment);
  };

  const inputProps = {
    required: true,
    readOnly: true,
    className: `${style.input} ${style.inputDate}`,
  };

  return createPortal(
    <div className={style.backdrop} onClick={handlClose}>
      <div className={style.modal} onClick={event => event.stopPropagation()}>
        <div className={style.close} onClick={onClose}>
          <img src={close} alt="close" />
        </div>
        <div className={style.wrapper}>
          <h2 className={style.modalTitle}>Add transaction</h2>
          <div className={style.switchBox}>
            <p className={income ? style.switchTitleIncome : style.switchTitle}>
              Income
            </p>
            <div className={style.switchWrapper}>
              <Switch
                onChange={handleChangeSwitch}
                checked={!income}
                className="react-switch"
                height={30}
                width={78}
                handleDiameter={44}
                offColor="#FFFFFF"
                onColor="#FFFFFF"
                offHandleColor="#24CCA7"
                onHandleColor="#FF6596"
                boxShadow={
                  !income
                    ? '0px 6px 15px rgba(255, 101, 150, 0.5)'
                    : '0px 6px 15px rgba(36, 204, 167, 0.5)'
                }
                uncheckedIcon={false}
                checkedIcon={false}
                uncheckedHandleIcon={
                  <>
                    <img className={style.vert} src={vertical} alt="vertical" />
                    <img className={style.svg} src={minus} alt="minus" />
                  </>
                }
                checkedHandleIcon={
                  <img className={style.svg} src={minus} alt="minus" />
                }
              />
            </div>
            <p
              className={income ? style.switchTitle : style.switchTitleExpense}
            >
              Expense
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={transactionsSchema}
            onSubmit={handleSubmit}
          >
            <Form className={style.form}>
              {!income ? (
                <Select
                  name="category"
                  options={expenseOptions}
                  placeholder="Select a category"
                  isSearchable={false}
                  hideSelectedOptions
                  tabSelectsValue
                  menuShouldScrollIntoView={false}
                  blurInputOnSelect={false}
                  theme={selectDefaultColor}
                  styles={selectStyles}
                  onChange={handleChangeSelect}
                  required
                />
              ) : (
                <>
                  <Select
                    name="category"
                    options={incomeOptions}
                    blurInputOnSelect={false}
                    menuShouldScrollIntoView={false}
                    placeholder="Select a category"
                    isSearchable={false}
                    hideSelectedOptions
                    tabSelectsValue
                    theme={selectDefaultColor}
                    styles={selectStyles}
                    onChange={handleChangeSelect}
                    required
                  />
                </>
              )}

              <div className={style.inputWrapper}>
                <Field
                  type="number"
                  name="amount"
                  placeholder="0.00"
                  className={`${style.input} ${style.inputAmount}`}
                />
                <ErrorMessage
                  name="amount"
                  component="div"
                  className={`${style.errorMessage} ${style.errorMessageAmount}`}
                />

                <div className={style.dateContainer}>
                  <Datetime
                    initialValue={currentDate}
                    value={dateA}
                    dateFormat="D-M-YYYY"
                    inputProps={inputProps}
                    closeOnSelect={true}
                    isValidDate={isValidDate}
                    name="date"
                    timeFormat={false}
                    onChange={handleChangeDate}
                    className={style.input}
                  />

                  <img src={calendar} alt="date" className={style.iconDate} />
                </div>
              </div>
              <div className={style.textareaContainer}>
                <Field
                  type="textarea"
                  name="comment"
                  placeholder="Comment"
                  className={style.textarea}
                />
                <ErrorMessage
                  name="comment"
                  component="div"
                  className={`${style.errorMessage} ${style.errorMessageComment}`}
                />
              </div>

              <ButtonActive text="Add" />
              <Button text="Cancel" onClick={onClose} />
            </Form>
          </Formik>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalAddTransactions;
