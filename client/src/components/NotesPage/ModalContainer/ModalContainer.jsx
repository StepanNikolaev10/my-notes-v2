import NoteAddModal from './NoteAddModal/NoteAddModal';
import NoteEditColorModal from './NoteEditColorModal/NoteEditColorModal';
import styles from './ModalContainer.module.scss';
import { MODAL_VARIANTS } from '../../../constants/modalVariants';
import useNotesStore from '../../../store/useNotesStore';

const ModalContainer = ({ isOpen, onClose }) => {
  const rootStyles = [styles.modalContainer]

  if(isOpen !== null) {
    rootStyles.push(styles.active);
  }

  return (
    <div className={rootStyles.join(' ')} onClick={() => onClose(null)}>
      {isOpen === MODAL_VARIANTS.NOTE_ADD && <NoteAddModal onClose={onClose} onClick={(e) => e.stopPropagation()}/>}
      {isOpen === MODAL_VARIANTS.NOTE_EDIT_COLOR && <NoteEditColorModal onClose={onClose} onClick={(e) => e.stopPropagation()}/>}
    </div>
  )
}
export default ModalContainer;