import NoteAddBtn from '../../UI/NoteAddBtn/NoteAddBtn';
import styles from './ActionsPanel.module.scss';
import { MODAL_VARIANTS } from '../../../../constants/modalVariants';

const ActionsPanel = ({ onOpenModal, onClearNotes, notesCount }) => {

  const rootStyles = [styles.actionsPanel];

  if(notesCount > 0) {
    rootStyles.push(styles.hasTwoBtn);
  }

  return (
    <div className={rootStyles.join(' ')}>
      {notesCount > 0 ? (
        <>
          <button className={styles.clearAllNotesBtn} onClick={onClearNotes}>Clear all</button>
          <NoteAddBtn
            onClick={() => onOpenModal(MODAL_VARIANTS.NOTE_ADD)}
          />
        </>
      ) : (
        <NoteAddBtn
          onClick={() => onOpenModal(MODAL_VARIANTS.NOTE_ADD)}
        />
      )}
    </div>
  )
}
export default ActionsPanel
