import { MODAL_VARIANTS } from '../../../../constants/modalVariants';
import styles from './EditNoteContent.module.scss';

const EditNoteContent = ({ editableNotes, onDeleteNotes, onStopEditing, onToggleTextBold, onToggleTextCursive, onOpenModal }) => {
  return (
    <div className={styles.editNoteContent}>
      <div className={styles.colLeft}>
        <button className={styles.stopEditingBtn} onClick={onStopEditing}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L4 4.00003M20 4L4.00002 20" stroke="gray" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className={styles.selectedNotesCount}>Выбрано: {editableNotes.length}</div>
      </div>
      <div className={styles.colRight}>
        <div className={styles.editTools}>
          <button className={styles.boldBtn} onClick={onToggleTextBold}>B</button>
          <button className={styles.cursiveBtn} onClick={onToggleTextCursive}>I</button>
          <button className={styles.openColorModalBtn} onClick={() => onOpenModal(MODAL_VARIANTS.NOTE_EDIT_COLOR)}>
            <img src="src/assets/icons/palette.svg" alt="open-color-modal-btn"/>
          </button>
          <button className={styles.deleteNoteBtn} onClick={onDeleteNotes}>
            <img src="src/assets/icons/trash-can.svg" alt="delete-note-btn"/>
          </button>
        </div>
      </div>
    </div>
  )
}
export default EditNoteContent