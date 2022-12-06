import { useState } from 'react'

import { Formik, Field, Form  } from 'formik';
import Switch from 'react-switch';
// import CustomSelect from '../CustomSelect/CustomSelect'
// import Button from '../Button/Button';



import LogoWallet from '../../assets/images/Wallet-min.svg';
import Wallet from '../../assets/images/Wallet.svg';
import Exit from '../../assets/images/Exit-min.svg';
import minus from '../../assets/images/Vectors.svg';
import vertical from '../../assets/images/Vector 5.svg';

import  { useEffect } from 'react'
import style from './modalAddTransaction.module.scss';

// const options = [
//     { value: 'Main expenses', label: 'Main expenses' },
//     { value: 'Products', label: 'Products' },
//     { value: 'Car', label: 'Car' },
//     { value: 'Self care', label: 'Self care' },
//     { value: 'Child care', label: 'Child care' },
//     { value: 'Household products', label: 'Household products' },
//     { value: 'Education', label: 'Education' },
//     { value: 'Leisure', label: 'Leisure' },
//     { value: 'Other expenses', label: 'Other expenses' },
//     { value: 'Entertainment', label: 'Entertainment' },
// ];

    const initialValues = {
  category: '',
  summ: '',
  date: '',
  coment: '',
};

const ModalAddTransactions = ({ onClose }) => {

    const [expense, setExpense] = useState(true);


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
        setExpense(!expense);
    };

    const handleSubmit = (value, { resetForm }) => {
        console.log("777");
        resetForm();
    };




    return (
        <div className={style.backdrop} onClick={handlClose}>
            <div className={style.modal} onClick={(event) => event.stopPropagation()}>
                <div className={style.modalHeader}>
                    <div className={style.logo}>
                        <img className={style.logoWallet} src={LogoWallet} alt="logoWallet" />
                        <img className={style.logoTitle} src={Wallet} alt="logoTitle" />
                    </div>
                    <div className={style.logoExit}>
                        <img className={style.exit} src={Exit} alt="Exit" />
                        
                    </div>
                </div>
                <h2 className={style.modalTitle}>Add transaction</h2>
                <div className={style.switchBox}>
                    <p className={expense ? style.switchTitleIncome : style.switchTitle}>Income</p>
                    <div className={style.switchWrapper}>
                        <Switch
                            onChange={handleChangeSwitch}
                            checked={!expense}
                            className="react-switch"
                            height={30}
                            width={78}
                            handleDiameter={44}
                            offColor="#FFFFFF"
                            onColor="#FFFFFF"
                            offHandleColor="#24CCA7"
                            onHandleColor="#FF6596"
                            boxShadow={
                                !expense
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
                    <p className={expense ? style.switchTitle : style.switchTitleExpense}>Expense</p>
                </div>

                <Formik
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                >
                    <Form className={style.form}>
                        {!expense && <Field as="select"
                            name="category"
                            placeholder="Select a category"                            
                            className={`${style.select} ${style.input}`}>
                            <option value="Main expenses">Main expenses</option>
                            <option value="Products">Products</option>
                            <option value="Car">Car</option>
                            <option value="Self care">Self care</option>
                            <option value="Child care">Child care</option>
                            <option value="Household products">Household products</option>
                            <option value="Education">Education</option>
                            <option value="Leisure">Leisure</option>
                            <option value="Other expenses">Other expenses</option>
                            <option value="Entertainment">Entertainment</option>
                        </Field>}
                        <div className={style.inputWrapper}>
                        <Field
                            type="text"
                            name="summ"
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
                            name="coment"
                            placeholder="Coment"
                            className={`${style.inputText} ${style.input}`}
                        />

                        <button type="submit" className={style.btn}>ADD</button>
                        <button type='button' className={style.btn}>CANCEL</button>
                    </Form>
                </Formik>

            </div>
        </div>
    )
};



export default ModalAddTransactions;
