import styles from './EditTaskContent.module.scss';

const EditTaskContent = ({ editableTasks, onDeleteTask }) => {
  return (
    <div className={styles.editTaskContent}>
      <div className={styles.colLeft}>
        <button className={styles.stopEditingBtn}>
          cross
        </button>
        <div className={styles.selectedTasksCount}>Выбрано: {editableTasks.length}</div>
      </div>
      <div className={styles.colRight}>
        <div className={styles.editTools}>
          <button className={styles.boldBtn}>B</button>
          <button className={styles.cursiveBtn}>I</button>
          <button className={styles.openColorModalBtn}>
            <img src="palette.svg" alt="open-color-modal-btn"/>
          </button>
          <button className={styles.deleteTaskBtn} onClick={() => onDeleteTask()}>
            <img src="trash-can.svg" alt="delete-task-btn"/>
          </button>
        </div>
      </div>
    </div>
  )
}
export default EditTaskContent