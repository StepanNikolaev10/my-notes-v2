import styles from './AuthorizedHeader.module.scss';
import DefaultContent from './DefaultContent/DefaultContent';
import EditNoteContent from './EditNoteContent/EditNoteContent';

const AuthorizedHeader = ({ editableNotes, onDeleteNotes, onStopEditing, onToggleTextBold, onToggleTextCursive, onOpenModal }) => {
  return (
    <div className={styles.authorizedHeader}>
      {editableNotes.length > 0 ? (
        <EditNoteContent
          editableNotes={editableNotes}
          onDeleteNotes={onDeleteNotes}
          onStopEditing={onStopEditing}
          onToggleTextBold={onToggleTextBold}
          onToggleTextCursive={onToggleTextCursive}
          onOpenModal={onOpenModal}
        />
      ) : (
        <DefaultContent/>
      )}
    </div>
  )
}
export default AuthorizedHeader;
