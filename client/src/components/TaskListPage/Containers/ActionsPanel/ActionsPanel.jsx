import TaskAddBtn from '../../UI/TaskAddBtn/TaskAddBtn';
import styles from './ActionsPanel.module.scss';

const ActionsPanel = ({ onOpenModal, onClearTaskList, tasksCount }) => {

  const rootStyles = [styles.actionsPanel];

  if(tasksCount > 0) {
    rootStyles.push(styles.hasTwoBtn);
  }

  return (
    <div className={rootStyles.join(' ')}>
      {tasksCount > 0 ? (
        <>
          <button className={styles.clearAllTasksBtn} onClick={onClearTaskList}>Clear all</button>
          <TaskAddBtn
            onClick={() => onOpenModal('TaskAddModal')}
          />
        </>
      ) : (
        <TaskAddBtn
          onClick={() => onOpenModal('TaskAddModal')}
        />
      )}
    </div>
  )
}
export default ActionsPanel
