import styles from './NoteAddBtn.module.scss';

const NoteAddBtn = (props) => {
  return (
    <button className={styles.addBtn} {...props}>Add</button>
  )
}
export default NoteAddBtn;