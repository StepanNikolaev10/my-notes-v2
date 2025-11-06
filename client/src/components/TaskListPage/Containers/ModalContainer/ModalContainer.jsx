import TaskAddModal from '../TaskAddModal/TaskAddModal';
import styles from './ModalContainer.module.scss';

const ModalContainer = ({ isOpen, onClose }) => {

  const rootStyles = [styles.modalContainer]

  if(isOpen !== null) {
    rootStyles.push(styles.active);
  }
  
  return (
    <div className={rootStyles.join(' ')}>
      {isOpen === 'TaskAddModal' && <TaskAddModal onClose={onClose}/>}
    </div>
  )
}
export default ModalContainer;