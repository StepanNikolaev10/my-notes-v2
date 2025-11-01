import styles from './TaskCheckbox.module.scss';

const TaskCheckbox = ({isCompleted, ...props}) => {
  return (
    <div className={styles.taskCheckbox} {...props}>
      {isCompleted && (
        <img src="check-mark.svg" alt="check-mark" />
      )}
    </div>
  )
}
export default TaskCheckbox