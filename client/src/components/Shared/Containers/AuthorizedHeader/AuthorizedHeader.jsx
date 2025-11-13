import styles from './AuthorizedHeader.module.scss';
import DefaultContent from './DefaultContent/DefaultContent';
import EditTaskContent from './EditTaskContent/EditTaskContent';

const AuthorizedHeader = ({ editableTasks, onDeleteTask, onStopEditing, onToggleTextBold, onToggleTextCursive }) => {
  return (
    <div className={styles.authorizedHeader}>
      {editableTasks.length > 0 ? (
        <EditTaskContent
          editableTasks={editableTasks}
          onDeleteTask={onDeleteTask}
          onStopEditing={onStopEditing}
          onToggleTextBold={onToggleTextBold}
          onToggleTextCursive={onToggleTextCursive}
        />
      ) : (
        <DefaultContent/>
      )}
    </div>
  )
}
export default AuthorizedHeader;
