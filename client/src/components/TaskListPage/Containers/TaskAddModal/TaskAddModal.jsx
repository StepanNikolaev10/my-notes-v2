import CloseModalBtn from '../../UI/CloseModalBtn/CloseModalBtn';
import ConfirmModalBtn from '../../UI/ConfirmModalBtn/ConfirmModalBtn';
import ModalFooter from '../../UI/ModalFooter/ModalFooter';
import ModalHeader from '../../UI/ModalHeader/ModalHeader';
import styles from './TaskAddModal.module.scss';

const TaskAddModal = ({ onClose }) => {
  return (
    <div className={styles.taskAddModal}>
      <ModalHeader title={'Add task'} onClose={onClose}/>
      <div className={styles.content}>
      </div>
      <ModalFooter>
        <CloseModalBtn onClick={onClose}>Cancel</CloseModalBtn>
        <ConfirmModalBtn>Add</ConfirmModalBtn>
      </ModalFooter>
    </div>
  )
}
export default TaskAddModal;