import TaskAddBtn from '../../UI/TaskAddBtn/TaskAddBtn';
import styles from './ActionsPanel.module.scss';

const ActionsPanel = ({onAddBtn}) => {
  return (
    <div className={styles.actionsPanel}>
      <TaskAddBtn
        onClick={onAddBtn}
      />
    </div>
  )
}
export default ActionsPanel