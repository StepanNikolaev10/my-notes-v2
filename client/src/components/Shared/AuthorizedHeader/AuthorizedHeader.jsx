import styles from './AuthorizedHeader.module.scss';
import DefaultContent from './DefaultContent/DefaultContent';
import EditNoteContent from './EditNoteContent/EditNoteContent';
import useEditableNotesStore from '../../../store/useEditableNotesStore';

const AuthorizedHeader = ({ onOpenModal }) => {;
  const editableNotesIds = useEditableNotesStore(state => state.editableNotesIds);
  return (
    <div className={styles.authorizedHeader}>
      {editableNotesIds.length > 0 
      ? 
        (
          <EditNoteContent onOpenModal={onOpenModal}/>
        ) 
      : 
        (
          <DefaultContent/>
        )
      }
    </div>
  )
}
export default AuthorizedHeader;
