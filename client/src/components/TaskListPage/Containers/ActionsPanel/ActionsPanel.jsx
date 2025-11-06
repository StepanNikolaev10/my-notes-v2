import TaskAddBtn from '../../UI/TaskAddBtn/TaskAddBtn';
import styles from './ActionsPanel.module.scss';

const ActionsPanel = ({ onOpenModal }) => {
  return (
    <div className={styles.actionsPanel}>
      <TaskAddBtn
        onClick={() => onOpenModal('TaskAddModal')}
      />
    </div>
  )
}
export default ActionsPanel