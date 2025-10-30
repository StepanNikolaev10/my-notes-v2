import styles from './TaskAddBtn.module.scss';

const TaskAddBtn = ({onAddTask}) => {
  return (
    <div className={styles.addBtn} onClick={onAddTask}>
      <span></span>
      <span></span>
    </div>
  )
}
export default TaskAddBtn;