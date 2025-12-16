import useEditableNotesStore from '../../../store/useEditableNotesStore';
import SearchedNotesEditingContent from './SearchedNotesEditingContent/SearchedNotesEditingContent';
import DefaultContent from './DefaultContent/DefaultContent';
import Header from '../../Shared/UI/Header/Header';

const NotesSearchPageHeader = ({ searchQuery, onSetSearchQuery, onOpenModal }) => {
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