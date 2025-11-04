import styles from './ModalHeader.module.scss';

const ModalHeader = ({ title }) => {
  return (
    <div className={styles.modalHeader}>
      <div className={styles.title}>{title}</div>
      <button className={styles.closeModalBtn}>
        <img src="cross.svg" alt="cross-btn"/>
      </button>
    </div>
  )
}
export default ModalHeader