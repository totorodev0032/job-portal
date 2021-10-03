import React from 'react';
import ReactDom from 'react-dom';
import styles from './modal.module.css';

function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className={styles.Overlay_Styles} />
      <div className={styles.Modal_Styles}>
        {/* <LoginModal onClose={onClose} /> */}
        helo
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Modal;
