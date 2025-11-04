import styles from './EditTaskBtn.module.scss';

const EditTaskBtn = (props) => {
  return (
    <div className={styles.editBtn} {...props}>
      <img src="edit-btn.svg" alt="edit-btn"/>
    </div>
  )
}
export default EditTaskBtn;