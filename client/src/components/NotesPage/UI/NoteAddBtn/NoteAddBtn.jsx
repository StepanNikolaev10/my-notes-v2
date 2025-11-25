import styles from './NoteAddBtn.module.scss';

const NoteAddBtn = (props) => {
  return (
    <button className={styles.noteAddBtn} {...props}>
      <span></span>
    </button>
  )
}
export default NoteAddBtn;