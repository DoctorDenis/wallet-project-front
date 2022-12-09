import { useState, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
// import Select, { StylesConfig } from 'react-select';
import Select from 'react-select';

import Switch from 'react-switch';
import * as Yup from 'yup';

import minus from '../../assets/images/Vectors.svg';
import vertical from '../../assets/images/Vector 5.svg';
import close from '../../assets/images/Close-min.svg';

import Button from '../Button/Button';
import ButtonActive from '../ButtonActive/ButtonActive';

import style from './modalAddTransaction.module.scss';

const expenseOptions = [
  { value: 'main expenses', label: 'Main expenses' },
  { value: 'products', label: 'Products' },
  { value: 'car', label: 'Car' },
  { value: 'self care', label: 'Self care' },
  { value: 'child care', label: 'Child care' },
  { value: 'household products', label: 'Household products' },
  { value: 'education', label: 'Education' },
  { value: 'leisure', label: 'Leisure' },
  { value: 'other expenses', label: 'Other expenses' },
  { value: 'entertainment', label: 'Entertainment' },
];

const incomeOptions = [
  { value: 'regular income', label: 'Regular income' },
  { value: 'irregular income', label: 'Irregular income' },
];

const initialValues = {
  category: '',
  amount: '',
  date: '',
  comment: '',
};

const validationSchema = Yup.object().shape({
  category: Yup.string().required('Category is required'),
  amount: Yup.string().required('Amount is required'),
  date: Yup.string().required('Date is required'),
  comment: Yup.string().required('Comment is required'),
});

const selectStyles = {
  control: styles => ({
    ...styles,

    marginBottom: '40px',
    paddingLeft: '6px',
    border: 'none',
    borderBottom: '1px solid #e0e0e0',
    borderRadius: 'none',
    fontFamily: 'Circe',
    fontSize: '18px',
    lineHeight: '1.5',
  }),

  option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
    ...styles,

    cursor: 'pointer',
    paddingLeft: '20px',
    height: '44px',
    fontFamily: 'Circe',
    fontSize: '18px',
    lineHeight: '1.5',
    borderRadius: '18px',
    ':hover': {
      color: '#ff6596',
      backgroundColor: '#fff',
      fontWeight: '700',
    },
  }),

  menu: styles => ({
    ...styles,

    backgroundColor: 'rgba(242, 242, 242, 0.6)',
    boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '20px',
    backdropFilter: 'blur(25px)',
  }),

  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),
};

const setDefaultColor = theme => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: '#fff',
      primary: '#fff',
    },
  };
};

const ModalAddTransactions = ({ onClose }) => {
  const [income, setIncome] = useState(false);

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

  const handleSubmit = ({ category, amount, date, comment }, { resetForm }) => {
    console.log(category, amount, date, comment);
    resetForm();
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
                  options={expenseOptions}
                  placeholder="Select a category"
                  noOptionsMessage={() => 'No other transaction categories :('}
                  hideSelectedOptions
                  tabSelectsValue
                  blurInputOnSelect={false}
                  theme={setDefaultColor}
                  isSearchable
                  styles={selectStyles}
                />
              ) : (
                <>
                  <Select
                    options={incomeOptions}
                    blurInputOnSelect={false}
                    placeholder="Select a category"
                    hideSelectedOptions
                    tabSelectsValue
                    theme={setDefaultColor}
                    styles={selectStyles}
                  />
                </>
              )}
              <div className={style.inputWrapper}>
                <Field
                  type="text"
                  name="amount"
                  placeholder="0.00"
                  className={style.input}
                />

                <Field
                  type="date"
                  name="date"
                  placeholder="Select date"
                  className={style.input}
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
