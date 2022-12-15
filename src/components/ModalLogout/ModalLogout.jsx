import './ModalLogout.css';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../../src/redux/auth/auth-operations';
import Close from '../../assets/images/Close.svg';

const ModalLogout = ({ isOpened, closeModal }) => {
  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [closeModal]);

  const dispatch = useDispatch();
  const onLogout = () =>
    dispatch(logout()) && localStorage.clear() && closeModal();

  return (
    <div
      className={`modal_wrapper ${isOpened ? 'open' : 'close'}`}
      onClick={() => closeModal()}
    >
      <div className="modal_body">
        <button className="modal_close" onClick={() => closeModal()}>
          <img className="close_svg" src={Close} alt="Close" />
        </button>
        <h2>Do you want to exit?</h2>
        <div className="modal_button">
          <button className="button button_y" type="button" onClick={onLogout}>
            Yes
          </button>
          <button
            className="button button_n"
            type="button"
            onClick={() => closeModal()}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
