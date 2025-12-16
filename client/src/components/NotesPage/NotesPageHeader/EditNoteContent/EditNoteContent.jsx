import styles from './EditNoteContent.module.scss';
import useEditableNotesStore from '../../../../store/useEditableNotesStore';
import useNotesStore from '../../../../store/useNotesStore';
import { MODAL_CONTENT_VARIANTS } from '../../../../constants/modalContentVariants';
import { NOTE_MOVEMENT_DIRECTION } from '../../../../constants/noteMovementDirection';
import ArrowNarrowIcon from '/src/assets/icons/arrow-narrow-up.svg?react';
import PaletteIcon from '/src/assets/icons/palette.svg?react';
import TrashCanIcon from '/src/assets/icons/trash-can.svg?react';
import CrossIcon from '/src/assets/icons/cross.svg?react';

const EditNoteContent = ({ onOpenModal }) => {
  const editableNotesIds = useEditableNotesStore(state => state.editableNotesIds);
  const deleteNotes = useNotesStore(state => state.deleteNotes);
  const stopEditing = useEditableNotesStore(state => state.stopEditing);
  const changeNotePosition = useNotesStore(state => state.changeNotePosition);

  const deleteNotesHandler = () => {
    deleteNotes(editableNotesIds);
    stopEditing();
  }

  const handleNoteDown = () => {
    if (editableNotesIds.length === 1) {
      changeNotePosition(editableNotesIds[0], NOTE_MOVEMENT_DIRECTION.DOWN);
    }
  }

  const handleNoteUp = () => {
    if (editableNotesIds.length === 1) {
      changeNotePosition(editableNotesIds[0], NOTE_MOVEMENT_DIRECTION.UP);
    }
  }

  return (
    <div className={styles.editNoteContent}>
      <div className={styles.leftGroup}>
        <button className={styles.stopEditingBtn} onClick={stopEditing}>
          <CrossIcon
            style={{
              width: '30px',
              height: '30px',
              fill: 'rgb(218, 218, 218)'
            }}
          />
        </button>
        <div className={styles.selectedNotesCount}>Selected: {editableNotesIds.length}</div>
      </div>
      <div className={styles.editTools}>
        <button 
          className={`${styles.editNoteBtn} ${editableNotesIds.length > 1 ? styles.inactive : ''}`} 
          onClick={handleNoteDown}
        >
          <ArrowNarrowIcon
            style={{
              width: '30px',
              height: '30px',
              transform: 'scaleY(-1)',
              stroke: 'rgb(218, 218, 218)'
            }}
          />
        </button>
        <button 
          className={`${styles.editNoteBtn} ${editableNotesIds.length > 1 ? styles.inactive : ''}`} 
          onClick={handleNoteUp}
        >
          <ArrowNarrowIcon
            style={{
              width: '30px',
              height: '30px',
              stroke: 'rgb(218, 218, 218)'
            }}
          />
        </button>
        <button className={styles.editNoteBtn} onClick={() => onOpenModal(MODAL_CONTENT_VARIANTS.NOTE_COLOR_EDITING)}>
          <PaletteIcon
            style={{
              width: '30px',
              height: '30px',
              fill: 'rgb(218, 218, 218)'
            }}
          />
        </button>
        <button className={styles.editNoteBtn} onClick={deleteNotesHandler}>
          <TrashCanIcon
            style={{
              width: '30px',
              height: '30px',
              fill: 'rgb(218, 218, 218)'
            }}
          />
        </button>
      </div>
    </div>
  )
}

export default EditNoteContent;