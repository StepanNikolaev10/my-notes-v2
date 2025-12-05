import styles from './NotesSearchPageHeader.module.scss';
import useEditableNotesStore from '../../../store/useEditableNotesStore';
import SearchedNotesEditingContent from './SearchedNotesEditingContent/SearchedNotesEditingContent';
import DefaultContent from './DefaultContent/DefaultContent';

const NotesSearchPageHeader = ({ searchQuery, onSetSearchQuery, onOpenModal }) => {
  const editableNotesIds = useEditableNotesStore(state => state.editableNotesIds);

  return (
    <header className={styles.notesSearchPageHeader}>
      {editableNotesIds.length > 0 
      ? 
        (
          <SearchedNotesEditingContent
            onOpenModal={onOpenModal}
          />
        ) 
      : 
        (
          <DefaultContent 
            searchQuery={searchQuery}
            onSetSearchQuery={onSetSearchQuery}
          />
        )
      }
    </header>
  )
}
export default NotesSearchPageHeader;