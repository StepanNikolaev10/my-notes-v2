import styles from './TaskAddBtn.module.scss';

const TaskAddBtn = (props) => {
  return (
    <button className={styles.addBtn} {...props}>Add</button>
  )
}
export default TaskAddBtn;