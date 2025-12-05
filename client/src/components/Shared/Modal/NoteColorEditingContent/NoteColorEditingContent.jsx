import { useState } from 'react';
import CloseModalBtn from '../UI/CloseModalBtn/CloseModalBtn';
import ConfirmModalBtn from '../UI/ConfirmModalBtn/ConfirmModalBtn';
import ModalFooter from '../UI/ModalFooter/ModalFooter';
import ModalHeader from '../UI/ModalHeader/ModalHeader';
import styles from './NoteColorEditingContent.module.scss';
import useNotesStore from '../../../../store/useNotesStore';
import useEditableNotesStore from '../../../../store/useEditableNotesStore';
import { NOTE_COLORS } from '../../../../constants/noteColors';

const NoteColorEditingContent = ({ onClose, ...props }) => {
  const editableNotesIds = useEditableNotesStore(state => state.editableNotesIds);
  const stopEditing = useEditableNotesStore(state => state.stopEditing);
  const changeNotesColor = useNotesStore(state => state.changeNotesColor);

  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorBtnClick = (color) => {
    setSelectedColor(color);
  }

  const handleChangeNotesColor = () =>{
    changeNotesColor(editableNotesIds, selectedColor)
    onClose();
    stopEditing();
  }

  return (
    <div className={styles.noteColorEditingContent} {...props}>
      <ModalHeader title={'Change note color'} onClose={onClose}/>
      <div className={styles.content}>
        {NOTE_COLORS.map(color => {
          const isSelected = selectedColor === color;
          return (
            <button
              key={color} 
              className={`${styles.colorBtn} ${isSelected ? styles.selectedColorBtn : ''}`}
              style={{ backgroundColor: color }}
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
  )
}
export default NoteColorEditingContent;