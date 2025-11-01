import styles from './TaskCheckbox.module.scss';

const TaskCheckbox = (props) => {
  return (
    <div className={styles.taskCheckbox}>
      <img src="check-mark.svg" alt=""/>
    </div>
  )
}
export default TaskCheckbox