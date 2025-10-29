import styles from './Task.module.scss'

const Task = ({id, text}) => {
  return (
    <div className={styles.Task}>
      <div className={styles.id}>{id}.</div>
      <div className={styles.text}>{text}</div>
    </div>
  )
}
export default Task