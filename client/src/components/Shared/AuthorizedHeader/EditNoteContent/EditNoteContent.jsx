import styles from './EditNoteContent.module.scss';
import useEditableNotesStore from '../../../../store/useEditableNotesStore';
import useNotesStore from '../../../../store/useNotesStore';
import { MODAL_CONTENT_VARIANTS } from '../../../../constants/modalContentVariants';

const EditNoteContent = ({ onOpenModal }) => {
  const editableNotesIds = useEditableNotesStore(state => state.editableNotesIds);
  const deleteNotes = useNotesStore(state => state.deleteNotes);
  const stopEditing = useEditableNotesStore(state => state.stopEditing);

  const deleteNotesHandler = () => {
    deleteNotes(editableNotesIds);
    stopEditing();
  }

  return (
    <div className={styles.editNoteContent}>
      <div className={styles.colLeft}>
        <button className={styles.stopEditingBtn} onClick={stopEditing}>
          <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L4 4.00003M20 4L4.00002 20" stroke="gray" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className={styles.selectedNotesCount}>Selected: {editableNotesIds.length}</div>
      </div>
      <div className={styles.colRight}>
        <div className={styles.editTools}>
          <button className={styles.openColorModalBtn} onClick={() => onOpenModal(MODAL_CONTENT_VARIANTS.NOTE_COLOR_EDITING)}>
            <img src="src/assets/icons/palette.svg" alt="open-color-modal-btn"/>
          </button>
          <button className={styles.deleteNoteBtn} onClick={deleteNotesHandler}>
            <img src="src/assets/icons/trash-can.svg" alt="delete-note-btn"/>
          </button>
        </div>
      </div>
    </div>
  )
}
export default EditNoteContent