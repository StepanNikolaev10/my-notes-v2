import styles from './ConfirmModalBtn.module.scss';

const ConfirmModalBtn = ({children, ...props}) => {
  return (
    <button className={styles.confirmModalBtn} {...props}>
      {children}
    </button>
  )
}
export default ConfirmModalBtn;