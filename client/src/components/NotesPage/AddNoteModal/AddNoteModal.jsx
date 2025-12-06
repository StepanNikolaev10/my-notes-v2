import { useState } from 'react';
import useNotesStore from '../../../store/useNotesStore';
import Modal from '../../Shared/UI/Modal/Modal';
import CloseModalBtn from '../../Shared/UI/CloseModalBtn/CloseModalBtn';
import ConfirmModalBtn from '../../Shared/UI/ConfirmModalBtn/ConfirmModalBtn';
import ModalFooter from '../../Shared/UI/ModalFooter/ModalFooter';
import ModalHeader from '../../Shared/UI/ModalHeader/ModalHeader';
import styles from './AddNoteModal.module.scss';

const AddNoteModal = ({ isOpen, onClose }) => {
  const addNote = useNotesStore(state => state.addNote);

  const [title, setTitle] = useState('');
  const [mainText, setMainText] = useState('');

  const addNoteHandler = (e) => {
    e.preventDefault();
    addNote(title, mainText)
    onClose();
    setTitle('')
    setMainText('')
  }

  return (
    <Modal isOpen={isOpen}>
      <form className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <ModalHeader title={'Add note'} onClose={onClose}/>
        <div className={styles.modalMain}>
          <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              type="text" 
              placeholder="Title..."
              autoFocus
          />
          <input
              value={mainText}
              onChange={e => setMainText(e.target.value)}
              type="text" 
              placeholder="Note text..."
          />
        </div>
        <ModalFooter>
          <CloseModalBtn onClick={onClose} type='button'>Cancel</CloseModalBtn>
          <ConfirmModalBtn onClick={addNoteHandler} type='submit'>Add</ConfirmModalBtn>
        </ModalFooter>
      </form>
    </Modal>
  )
}
export default AddNoteModal;