import useEditableNotesStore from '../../../store/useEditableNotesStore';
import SearchedNotesEditingContent from './SearchedNotesEditingContent/SearchedNotesEditingContent';
import DefaultContent from './DefaultContent/DefaultContent';
import Header from '../../Shared/UI/Header/Header';

interface NotesSearchPageHeaderProps {
  searchQuery: string,
  onSetSearchQuery: React.Dispatch<React.SetStateAction<string>>,
  onOpenModal: () => void
}

const NotesSearchPageHeader = ({ searchQuery, onSetSearchQuery, onOpenModal }:NotesSearchPageHeaderProps) => {
  const editableNotesIds = useEditableNotesStore(state => state.editableNotesIds);

  return (
    <Header>
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
    </Header>
  )
}
export default NotesSearchPageHeader;