import styles from './EditNoteBtn.module.scss';

const EditNoteBtn = (props) => {
  return (
    <div className={styles.editBtn} {...props}>
      <img src="src/assets/icons/edit-btn.svg" alt="edit-btn"/>
    </div>
  )
}
export default EditNoteBtn;