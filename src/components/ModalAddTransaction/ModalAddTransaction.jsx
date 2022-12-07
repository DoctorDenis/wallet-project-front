import { useState } from 'react'

import { Formik, Field, Form  } from 'formik';
import Switch from 'react-switch';

import minus from '../../assets/images/Vectors.svg';
import vertical from '../../assets/images/Vector 5.svg';
import close from '../../assets/images/Close-min.svg';

import  { useEffect } from 'react'
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
    { value: 'regular', label: 'Regular' },
    { value: 'casino', label: 'Сasino' },
    { value: 'found', label: 'Found' },
];

const initialValues = {
    category: '',
    amount: '',
    date: '',
    comment: '',
};

const ModalAddTransactions = ({ onClose }) => {


    const [income, setIncome] = useState(false);
    // const [category, setCategory] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');
    // const [comment, setComment] = useState('');


    const handlClose = event => {
        if (event.currentTarget === event.target) {
            onClose()
        }
    }
    
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.code === 'Escape') { onClose() }
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
            
            <div className={style.modal} onClick={(event) => event.stopPropagation()}>
                <div className={style.close} onClick={onClose}>
                    <img src={close} alt="close" />
                </div>                
                <div className={style.wrapper}>
                    <h2 className={style.modalTitle}>Add transaction</h2>
                    <div className={style.switchBox}>
                        <p className={income ? style.switchTitleIncome : style.switchTitle}>Income</p>
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
                                checkedHandleIcon={<img className={style.svg} src={minus} alt="minus" />}
                            />
                        </div>
                        <p className={income ? style.switchTitle : style.switchTitleExpense}>Expense</p>
                    </div>

                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                    >
                        <Form className={style.form}>
                            {!income ?
                                <Field as="select"
                                    name="category"
                                    className={`${style.select} ${style.input}`}>
                                    <option defaultValue >Select expense category</option>
                                    {expenseOptions.map(({ value, label }) => <option key={value} className={style.selectOption} value={value}>{label}</option>)}
                                </Field> :
                                <Field as="select"
                                    name="category"
                                    className={`${style.select} ${style.input}`}>
                                    <option defaultValue >Select income category</option>
                                    {incomeOptions.map(({ value, label }) => <option key={value} style={{width: '280px'}} className={style.selectOption} value={value}>{label}</option>)}
                                </Field>}
                            <div className={style.inputWrapper}>
                                <Field
                                    type="text"
                                    name="amount"
                                    placeholder="0.00"
                                    className={style.inputTablet}
                                />
                                <Field
                                    type="date"
                                    name="date"
                                    placeholder="Select date"
                                    className={style.inputTablet}
                                />
                            </div>
                            <Field
                                type="text"
                                name="comment"
                                placeholder="Comment"
                                className={`${style.inputText} ${style.input}`}
                            />

                            <button type="submit" className={style.btn}>ADD</button>
                            <button type='button' onClick={onClose}  className={style.btn}>CANCEL</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
};




export default ModalAddTransactions;
