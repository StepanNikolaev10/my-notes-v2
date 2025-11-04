import styles from './CloseModalBtn.module.scss';

const CloseModalBtn = ({children, ...props}) => {
  return (
    <button className={styles.closeModalBtn} {...props}>
      {children}
    </button>
  )
}
export default CloseModalBtn;