import { useState } from 'react';
import CloseModalBtn from '../../UI/CloseModalBtn/CloseModalBtn';
import ConfirmModalBtn from '../../UI/ConfirmModalBtn/ConfirmModalBtn';
import ModalFooter from '../../UI/ModalFooter/ModalFooter';
import ModalHeader from '../../UI/ModalHeader/ModalHeader';
import styles from './NoteAddModal.module.scss';
import useNotesStore from '../../../../store/useNotesStore';

const NoteAddModal = ({ onClose, ...props }) => {
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
    <form className={styles.noteAddModal} {...props}>
      <ModalHeader title={'Add note'} onClose={onClose}/>
      <div className={styles.content}>
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
  )
}
export default NoteAddModal;