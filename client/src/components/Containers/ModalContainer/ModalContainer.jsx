import styles from './ModalContainer.module.scss';

const ModalContainer = ({ children }) => {
  return (
    <div className={styles.modalContainer}>
      {children}
    </div>
  )
}
export default ModalContainer;