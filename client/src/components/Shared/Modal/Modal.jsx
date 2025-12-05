import NoteAddingContent from './NoteAddingContent/NoteAddingContent';
import NoteColorEditingContent from './NoteColorEditingContent/NoteColorEditingContent';
import styles from './Modal.module.scss';
import { MODAL_CONTENT_VARIANTS } from '../../../constants/modalContentVariants';

const Modal = ({ isOpen, onClose }) => {
  const rootStyles = [styles.modal]

  if(isOpen !== null) {
    rootStyles.push(styles.active);
  }

  return (
    <div className={rootStyles.join(' ')} onClick={() => onClose(null)}>
      {isOpen === MODAL_CONTENT_VARIANTS.NOTE_ADDING && <NoteAddingContent onClose={onClose} onClick={(e) => e.stopPropagation()}/>}
      {isOpen === MODAL_CONTENT_VARIANTS.NOTE_COLOR_EDITING && <NoteColorEditingContent onClose={onClose} onClick={(e) => e.stopPropagation()}/>}
    </div>
  )
}
export default Modal;