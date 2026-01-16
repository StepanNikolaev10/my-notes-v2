import styles from './NotesSearchPageHeader.module.scss';
import useSelectedNotesStore from '../../../store/useSelectedNotesStore';
import SearchedNotesEditingContent from './SearchedNotesEditingContent/SearchedNotesEditingContent';
import DefaultContent from './DefaultContent/DefaultContent';

interface NotesSearchPageHeaderProps {
  searchQuery: string,
  onSetSearchQuery: React.Dispatch<React.SetStateAction<string>>,
  onOpenModal: () => void
}

const NotesSearchPageHeader = ({ searchQuery, onSetSearchQuery, onOpenModal }:NotesSearchPageHeaderProps) => {
  const selectedNotesIds = useSelectedNotesStore(state => state.selectedNotesIds);

  return (
    <header className={styles.header}>
      {selectedNotesIds.length > 0 
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