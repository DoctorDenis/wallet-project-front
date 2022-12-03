import './ModalLogout.css';
import React from 'react';
import { useEffect } from 'react';

const ModalLogout = ({ isOpened, closeModal }) => {
  useEffect(() => {
    const close = e => {
      if (e.keyCode === 27) {
        closeModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return (
    <div
      className={`modal_wrapper ${isOpened ? 'open' : 'close'}`}
      onClick={() => closeModal()}
    >
      <div className="modal_body" onClick={e => e.stopPropagation()}>
        <button className="modal_close" onClick={() => closeModal()}>
          ×
        </button>
        <h2>Do you want to exit?</h2>
        <button type="button">Yes</button>
        <button type="button">No</button>
      </div>
    </div>
  );
};

export default ModalLogout;
