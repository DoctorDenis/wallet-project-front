
// import { useDispatch, useSelector } from "react-redux";
import  { useEffect } from 'react'
import style from './modalAddTransaction.module.scss';



const ModalAddTransactions = ({onClose}) => {


    const handlClose = event => {
    if (event.currentTarget === event.target) {
        onClose()
    }
    }
    
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.code === 'Escape') { onClose() }};
        window.addEventListener('keydown', handleKeyDown);
        return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
    }, [onClose]);



    return (
        <div className={style.backdrop} onClick={handlClose}>
            <div className={style.modal} onClick={(event) => event.stopPropagation()}>
            </div>
        </div>
    )
}


export default ModalAddTransactions;
