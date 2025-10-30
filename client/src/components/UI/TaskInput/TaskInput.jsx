import styles from './TaskInput.module.scss'

const TaskInput = (props) => {
  return (
    <input className={styles.Input} {...props}></input>
  )
}
export default TaskInput