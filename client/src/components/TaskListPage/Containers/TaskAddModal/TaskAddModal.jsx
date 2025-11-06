import { useState } from 'react';
import CloseModalBtn from '../../UI/CloseModalBtn/CloseModalBtn';
import ConfirmModalBtn from '../../UI/ConfirmModalBtn/ConfirmModalBtn';
import ModalFooter from '../../UI/ModalFooter/ModalFooter';
import ModalHeader from '../../UI/ModalHeader/ModalHeader';
import styles from './TaskAddModal.module.scss';

const TaskAddModal = ({ onClose, onAddTask }) => {
  const [text, setText] = useState('');

  const addNewTask = (e) => {
    e.preventDefault();
    onAddTask(text)
    setText('')
  }

  return (
    <form className={styles.taskAddModal}>
      <ModalHeader title={'Add task'} onClose={onClose}/>
      <div className={styles.content}>
        <input
            value={text}
            onChange={e => setText(e.target.value)}
            type="text" 
            placeholder="Write something..."
        />
      </div>
      <ModalFooter>
        <CloseModalBtn onClick={onClose} type='button'>Cancel</CloseModalBtn>
        <ConfirmModalBtn onClick={addNewTask} type='submit'>Add</ConfirmModalBtn>
      </ModalFooter>
    </form>
  )
}
export default TaskAddModal;