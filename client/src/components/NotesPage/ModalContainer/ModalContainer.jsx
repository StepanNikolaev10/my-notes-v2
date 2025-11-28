import NoteAddModal from './NoteAddModal/NoteAddModal';
import NoteEditColorModal from './NoteEditColorModal/NoteEditColorModal';
import styles from './ModalContainer.module.scss';
import { MODAL_VARIANTS } from '../../../constants/modalVariants';

const ModalContainer = ({ isOpen, onClose, onAddNote, onUpdateNotesColor }) => {

  const rootStyles = [styles.modalContainer]

  if(isOpen !== null) {
    rootStyles.push(styles.active);
  }
  
  return (
    <div className={rootStyles.join(' ')} onClick={() => onClose(null)}>
      {isOpen === MODAL_VARIANTS.NOTE_ADD && <NoteAddModal onClose={onClose} onAddNote={onAddNote} onClick={(e) => e.stopPropagation()}/>}
      {isOpen === MODAL_VARIANTS.NOTE_EDIT_COLOR && <NoteEditColorModal onClose={onClose} onUpdateNotesColor={onUpdateNotesColor} onClick={(e) => e.stopPropagation()}/>}
    </div>
  )
}
export default ModalContainer;