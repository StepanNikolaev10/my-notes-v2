import { useState } from 'react';
import CloseModalBtn from '../../../UI/CloseModalBtn/CloseModalBtn';
import ConfirmModalBtn from '../../../UI/ConfirmModalBtn/ConfirmModalBtn';
import ModalFooter from '../../../UI/ModalFooter/ModalFooter';
import ModalHeader from '../../../UI/ModalHeader/ModalHeader';
import styles from './NoteEditColorModal.module.scss';

const colorOptions = [
  'transparent',
  'rgb(247, 155, 159)',
  'rgb(237, 155, 96)',
  'rgb(255, 240, 139)',
  'rgb(144, 182, 213)',
  'rgb(194, 221, 243)',
  'rgb(138, 215, 200)',
  'rgb(193, 237, 193)',
  'rgb(225, 188, 217)',
  'rgb(255, 233, 203)',
  'rgb(228, 222, 213)',
  'rgb(247, 244, 244)'
];

const NoteEditColorModal = ({ onClose, onUpdateNotesColor, ...props }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorBtnClick = (color) => {
    setSelectedColor(color);
  }

  const handleConfirmBtn = () =>{
    onUpdateNotesColor(selectedColor)
    onClose();
  }

  return (
    <div className={styles.noteEditColorModal} {...props}>
      <ModalHeader title={'Change note color'} onClose={onClose}/>
      <div className={styles.content}>
        {colorOptions.map(color => {
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
        <ConfirmModalBtn onClick={handleConfirmBtn}>Confirm</ConfirmModalBtn>
      </ModalFooter>
    </div>
  )
}
export default NoteEditColorModal;