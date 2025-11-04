import styles from './ModalFooter.module.scss';

const ModalFooter = ({ children }) => {
  return (
    <div className={styles.modalFooter}>
      {children}
    </div>
  )
}
export default ModalFooter