import styles from './TaskInput.module.scss';

const TaskInput = (props) => {
  return (
    <input className={styles.TaskInput} {...props}/>
  )
}
export default TaskInput;