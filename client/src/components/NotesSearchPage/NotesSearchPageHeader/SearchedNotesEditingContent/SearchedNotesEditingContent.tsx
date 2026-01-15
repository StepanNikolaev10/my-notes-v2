import styles from './SearchedNotesEditingContent.module.scss';
import useSelectedNotesStore from '../../../../store/useSelectedNotesStore';
import useNotesStore from '../../../../store/useNotesStore';
import type { ModalContentVariants } from '../../../../types/ui';

interface SearchedNotesEditingContent {
  onOpenModal: (modalType: ModalContentVariants) => void
}

const SearchedNotesEditingContent = ({ onOpenModal }:SearchedNotesEditingContent) => {
  const selectedNotesIds = useSelectedNotesStore(state => state.selectedNotesIds);
  const deleteNotes = useNotesStore(state => state.deleteNotes);
  const deselectAll = useSelectedNotesStore(state => state.deselectAll);

  const deleteNotesHandler = () => {
    deleteNotes(selectedNotesIds);
    deselectAll();
  }

  return (
    <div className={styles.searchedNotesEditingContent}>
      
        <div className={styles.leftGroup}>
          <button className={styles.stopEditingBtn} onClick={deselectAll}>
            <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 20L4 4.00003M20 4L4.00002 20" stroke="gray" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <div className={styles.selectedNotesCount}>Selected: {selectedNotesIds.length}</div>
        </div>

        <div className={styles.editTools}>
          <button className={styles.openColorModalBtn} onClick={() => onOpenModal('NOTE_COLOR_EDITING')}>
            <img src="src/assets/icons/palette.svg" alt="open-color-modal-btn"/>
          </button>
          <button className={styles.deleteNoteBtn} onClick={deleteNotesHandler}>
            <img src="src/assets/icons/trash-can.svg" alt="delete-note-btn"/>
          </button>
        </div>
        
    </div>
  )
}
export default SearchedNotesEditingContent;