import { MODAL_VARIANTS } from '../../../../constants/modalVariants';
import TaskAddModal from '../TaskAddModal/TaskAddModal';
import styles from './ModalContainer.module.scss';

const ModalContainer = ({ isOpen, onClose, onAddTask }) => {

  const rootStyles = [styles.modalContainer]

  if(isOpen !== null) {
    rootStyles.push(styles.active);
  }
  
  return (
    <div className={rootStyles.join(' ')} onClick={() => onClose(null)}>
      {isOpen === MODAL_VARIANTS.TASK_ADD && <TaskAddModal onClose={onClose} onAddTask={onAddTask} onClick={(e) => e.stopPropagation()}/>}
      {/* {isOpen === MODAL_VARIANTS.TASK_EDIT && <TaskEditModal onClose={onClose} onEditTask={onEditTask} onClick={(e) => e.stopPropagation()}/>} */}
    </div>
  )
}
export default ModalContainer;