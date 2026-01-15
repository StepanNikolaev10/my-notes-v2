import useSelectedNotesStore from '../../../store/useSelectedNotesStore';
import SearchedNotesEditingContent from './SearchedNotesEditingContent/SearchedNotesEditingContent';
import DefaultContent from './DefaultContent/DefaultContent';
import Header from '../../Shared/UI/Header/Header';

interface NotesSearchPageHeaderProps {
  searchQuery: string,
  onSetSearchQuery: React.Dispatch<React.SetStateAction<string>>,
  onOpenModal: () => void
}

const NotesSearchPageHeader = ({ searchQuery, onSetSearchQuery, onOpenModal }:NotesSearchPageHeaderProps) => {
  const selectedNotesIds = useSelectedNotesStore(state => state.selectedNotesIds);

  return (
    <Header>
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
    </Header>
  )
}
export default NotesSearchPageHeader;