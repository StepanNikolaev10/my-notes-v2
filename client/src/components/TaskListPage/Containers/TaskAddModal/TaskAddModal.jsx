import { useState } from 'react';
import CloseModalBtn from '../../UI/CloseModalBtn/CloseModalBtn';
import ConfirmModalBtn from '../../UI/ConfirmModalBtn/ConfirmModalBtn';
import ModalFooter from '../../UI/ModalFooter/ModalFooter';
import ModalHeader from '../../UI/ModalHeader/ModalHeader';
import styles from './TaskAddModal.module.scss';

const TaskAddModal = ({ onClose, onAddTask, ...props }) => {
  const [title, setTitle] = useState('');
  const [mainText, setMainText] = useState('');

  const addNewTask = (e) => {
    e.preventDefault();
    onAddTask(title, mainText)
    setTitle('')
    setMainText('')
  }

  return (
    <form className={styles.taskAddModal} {...props}>
      <ModalHeader title={'Add task'} onClose={onClose}/>
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
            placeholder="Task text..."
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