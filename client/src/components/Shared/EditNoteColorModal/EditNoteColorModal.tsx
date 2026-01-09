import { useState } from 'react';
import CloseModalBtn from '../UI/CloseModalBtn/CloseModalBtn';
import ConfirmModalBtn from '../UI/ConfirmModalBtn/ConfirmModalBtn';
import ModalFooter from '../UI/ModalFooter/ModalFooter';
import ModalHeader from '../UI/ModalHeader/ModalHeader';
import styles from './EditNoteColorModal.module.scss';
import useNotesStore from '../../../store/useNotesStore';
import useEditableNotesStore from '../../../store/useEditableNotesStore';
import Modal from '../UI/Modal/Modal';
import { NOTE_COLORS, noteKeys } from '../../../constants/noteColors';
import type { NoteColorsType } from '../../../constants/noteColors';

interface EditNoteColorModal {
  onClose: () => void
}

const EditNoteColorModal = ({ onClose }:EditNoteColorModal) => {
  const editableNotesIds = useEditableNotesStore(state => state.editableNotesIds);
  const stopEditing = useEditableNotesStore(state => state.stopEditing);
  const changeNotesColor = useNotesStore(state => state.changeNotesColor);

  const [selectedColor, setSelectedColor] = useState<NoteColorsType | null>(null);

  const handleColorBtnClick = (color: NoteColorsType) => {
    setSelectedColor(color);
  }

  const handleChangeNotesColor = () => {
    if (!selectedColor) return;
    changeNotesColor(editableNotesIds, selectedColor)
    onClose();
    stopEditing();
  }

  return (
    <Modal onClose={onClose}>
      <div className={styles.modalContent}>
        <ModalHeader title={'Change note color'} onClose={onClose}/>
        <div className={styles.content}>
          {
          noteKeys.map(color => {
            const isSelected = selectedColor === color;
            return (
              <button
                key={color} 
                className={`${styles.colorBtn} ${isSelected ? styles.selectedColorBtn : ''}`}
                style={{ backgroundColor:  NOTE_COLORS[color]}}
                onClick={() => handleColorBtnClick(color)}
              >
                {isSelected && <img src="src/assets/icons/check-mark.svg" alt="check-mark"/> }
              </button>
            )
          })}
        </div>
        <ModalFooter>
          <CloseModalBtn onClick={onClose} type='button'>Cancel</CloseModalBtn>
          <ConfirmModalBtn onClick={handleChangeNotesColor}>Confirm</ConfirmModalBtn>
        </ModalFooter>
      </div>
    </Modal>
  )
}

export default EditNoteColorModal;