import TaskAddModal from '../TaskAddModal/TaskAddModal';
import styles from './ModalContainer.module.scss';

const ModalContainer = ({ isOpen, onClose, onAddTask }) => {

  const rootStyles = [styles.modalContainer]

  if(isOpen !== null) {
    rootStyles.push(styles.active);
  }
  
  return (
    <div className={rootStyles.join(' ')}>
      {isOpen === 'TaskAddModal' && <TaskAddModal onClose={onClose} onAddTask={onAddTask}/>}
    </div>
  )
}
export default ModalContainer;