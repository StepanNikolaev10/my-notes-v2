import styles from './ModalHeader.module.scss';

const ModalHeader = ({ title, onClose}) => {
  return (
    <div className={styles.modalHeader}>
      <div className={styles.title}>{title}</div>
      <button className={styles.closeModalBtn} onClick={onClose} type='button'>
        <img src="src/assets/icons/cross.svg" alt="cross-btn"/>
      </button>
    </div>
  )
}
export default ModalHeader