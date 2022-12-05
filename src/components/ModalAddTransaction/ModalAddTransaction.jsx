import { useState } from 'react'

import { Formik, Form } from 'formik';
import Switch from 'react-switch';


import LogoWallet from '../../assets/images/Wallet-min.svg';
import Wallet from '../../assets/images/Wallet.svg';
import Exit from '../../assets/images/Exit-min.svg';
import minus from '../../assets/images/Vectors.svg';
import vertical from '../../assets/images/Vector 5.svg';

import  { useEffect } from 'react'
import style from './modalAddTransaction.module.scss';



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
                    <p className={ expense ? style.switchTitleIncome : style.switchTitle}>Income</p>
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
                    <p className={ expense ? style.switchTitle : style.switchTitleExpense}>Expense</p>
                </div>
                <Formik>
                    <Form className={style.form}>
                    </Form>
                </Formik>
                
            </div>
        </div>
    )
};



export default ModalAddTransactions;
