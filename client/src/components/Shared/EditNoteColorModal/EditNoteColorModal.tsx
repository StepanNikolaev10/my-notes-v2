import { useState } from 'react';
import CloseModalBtn from '../UI/CloseModalBtn/CloseModalBtn';
import ConfirmModalBtn from '../UI/ConfirmModalBtn/ConfirmModalBtn';
import ModalFooter from '../UI/ModalFooter/ModalFooter';
import ModalHeader from '../UI/ModalHeader/ModalHeader';
import styles from './EditNoteColorModal.module.scss';
import useNotesStore from '../../../store/useNotesStore';
import useSelectedNotesStore from '../../../store/useSelectedNotesStore';
import Modal from '../UI/Modal/Modal';
import { NOTE_COLORS, noteColorsKeys, type NoteColorsKeysType } from '../../../constants/noteColors';
import CheckmarkIcon from '/src/assets/icons/checkmark.svg?react'

interface EditNoteColorModal {
  onClose: () => void;
}

const EditNoteColorModal = ({ onClose }: EditNoteColorModal) => {
  const selectedNotesIds = useSelectedNotesStore(state => state.selectedNotesIds);
  const deselectAll = useSelectedNotesStore(state => state.deselectAll);
  const changeNotesColor = useNotesStore(state => state.changeNotesColor);

  const [selectedColorKey, setSelectedColorKey] = useState<NoteColorsKeysType | null>(null);

  const handleColorBtnClick = (colorKey: NoteColorsKeysType) => {
    setSelectedColorKey(colorKey);
  }

  const handleChangeNotesColor = () => {
    if (!selectedColorKey) return;
    changeNotesColor(selectedNotesIds, selectedColorKey)
    onClose();
    deselectAll();
  }
  return (
    <Modal onClose={onClose}>
      <div className={styles.modalContent}>
        <ModalHeader title={'Change note color'} onClose={onClose}/>
        <div className={styles.content}>
          {
            noteColorsKeys.map((colorKey: NoteColorsKeysType) => {
              const isSelected = selectedColorKey === colorKey;
              return (
                <button
                  key={colorKey} 
                  className={`${styles.colorBtn} ${isSelected ? styles.selectedColorBtn : ''}`}
                  style={{ backgroundColor:  NOTE_COLORS[colorKey]}}
                  onClick={() => handleColorBtnClick(colorKey)}
                >
                  {isSelected && 
                    <CheckmarkIcon
                      className={styles.checkmarkIcon}
                      style={{
                        width: '30px',
                        height: '30px',
                      }}
                    />
                  }
                </button>
              )
            })
          }
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