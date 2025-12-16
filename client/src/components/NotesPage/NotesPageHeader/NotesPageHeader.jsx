import styles from './NotesPageHeader.module.scss';
import DefaultContent from './DefaultContent/DefaultContent';
import EditNoteContent from './EditNoteContent/EditNoteContent';
import useEditableNotesStore from '../../../store/useEditableNotesStore';

const NotesPageHeader = ({ onOpenModal }) => {;
  const editableNotesIds = useEditableNotesStore(state => state.editableNotesIds);
  return (
    <header className={styles.notesPageHeader}>
      {editableNotesIds.length > 0 
      ? 
        (
          <EditNoteContent onOpenModal={onOpenModal}/>
        ) 
      : 
        (
          <DefaultContent onOpenModal={onOpenModal}/>
        )
      }
    </header>
  )
}
export default NotesPageHeader;
