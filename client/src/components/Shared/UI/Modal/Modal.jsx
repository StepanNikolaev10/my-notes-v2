import styles from './Modal.module.scss';

const Modal = ({ isOpen, children }) => {
  const rootStyles = [styles.modalBackdrop]

  if(isOpen) {
    rootStyles.push(styles.active);
  }

  return (
    <div className={rootStyles.join(' ')} >
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  )
}
export default Modal;