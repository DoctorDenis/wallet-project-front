import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import Switch from 'react-switch';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { useToken } from '../../shared/hooks/useToken';

import Button from '../Button/Button';
import ButtonActive from '../ButtonActive/ButtonActive';

import { expenseOptions } from '../../utils/expenseOptions';
import { incomeOptions } from '../../utils/incomeOptions';

import { selectStyles } from '../../helpers/styles/selectStyles';
import { selectDefaultColor } from '../../helpers/styles/selectDefaultColor';
import { addTransaction } from '../../redux/transaction/transaction-operations';

import minus from '../../assets/images/Vectors.svg';
import vertical from '../../assets/images/Vector 5.svg';
import close from '../../assets/images/Close-min.svg';

import { changeModalStatus } from '../../redux/global/global-actions';

import style from './modalAddTransaction.module.scss';

const initialValues = {
  category: '',
  amount: '',
  date: '',
  comment: '',
};

const validationSchema = Yup.object().shape({
  //   category: Yup.mixed().oneOf(incomeOptions, expenseOptions).required(),
  //   options: Yup.mixed().required(),
  amount: Yup.number().required('Amount is required'),
  date: Yup.date().required('Date is required'),
  comment: Yup.string(),
});

const ModalAddTransactions = ({ onClose }) => {
  const [income, setIncome] = useState(false);
  const [select, setSelect] = useState('');
  const dispatch = useDispatch();
  //   const token = useToken();

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

  const handleSubmit = ({ amount, date, comment }, { resetForm }) => {
    dispatch(
      addTransaction({
        isIncome: income,
        category: select || 'Main expenses',
        amount,
        date,
        comment,
      })
    );
    resetForm();
    dispatch(changeModalStatus(!modalAddTransactionStatus));
  };

  const handleChange = event => {
    setSelect(event.label);
  };

  return (
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
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className={style.form}>
              {!income ? (
                <Select
                  name="category"
                  options={expenseOptions}
                  placeholder="Select a category"
                  noOptionsMessage={() => 'No other transaction categories :('}
                  hideSelectedOptions
                  tabSelectsValue
                  blurInputOnSelect={false}
                  theme={selectDefaultColor}
                  isSearchable
                  styles={selectStyles}
                  onChange={handleChange}
                />
              ) : (
                <>
                  <Select
                    name="category"
                    options={incomeOptions}
                    blurInputOnSelect={false}
                    placeholder="Select a category"
                    hideSelectedOptions
                    tabSelectsValue
                    theme={selectDefaultColor}
                    styles={selectStyles}
                    onChange={handleChange}
                  />
                </>
              )}
              <div className={style.inputWrapper}>
                <Field
                  type="number"
                  name="amount"
                  placeholder="0.00"
                  className={style.input}
                />
                <ErrorMessage
                  name="amount"
                  component="div"
                  className={style.error}
                />

                <Field
                  type="date"
                  name="date"
                  placeholder="Select date"
                  className={style.input}
                />
                <ErrorMessage
                  name="date"
                  component="div"
                  className={style.errorDate}
                />
              </div>
              <Field
                type="textarea"
                name="comment"
                placeholder="Comment"
                className={style.textarea}
              />

              <ButtonActive text="Add" />
              <Button text="Cancel" onClick={onClose} />
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ModalAddTransactions;
