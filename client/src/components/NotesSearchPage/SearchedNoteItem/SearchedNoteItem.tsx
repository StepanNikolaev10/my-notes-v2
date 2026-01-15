import styles from './SearchedNoteItem.module.scss';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import useSelectedNotesStore from '../../../store/useSelectedNotesStore';

interface SearchedNoteItemProps {
  searchedNote: any,
  searchQuery: string
}

const SearchedNoteItem = ({ searchedNote }:SearchedNoteItemProps) => {
  console.log(searchedNote)
  const selectedNotesIds = useSelectedNotesStore(state => state.selectedNotesIds)
  const toggleSelectNote = useSelectedNotesStore(state => state.toggleSelectNote);

  const router = useNavigate();

  const rootStyles = [styles.searchedNoteItem]

  const isEditable = selectedNotesIds.some((editableNoteId: string) => editableNoteId === searchedNote.id);
  if(isEditable) {
    rootStyles.push(styles.editable);
  }

  const addEditableNoteHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleSelectNote(searchedNote.id)
  }

  return (
    <div 
      className={rootStyles.join(' ')} 
      style={{
        backgroundColor: searchedNote.styles?.color,
        border: searchedNote.styles?.color && !isEditable && 'none'
      }}
      onClick={() => router(`/notes/${searchedNote.id}`)}
    >

      <div className={styles.noteContent}>
        <div 
          className={styles.title}
          style={{
            marginBottom: searchedNote.content.title && searchedNote.content.mainText && '10px'
          }}
        >
          {searchedNote.content.title}
        </div>
        <div className={styles.mainText}>
          {parse(DOMPurify.sanitize(searchedNote.content.mainText))}
        </div>
      </div>

      <div className={styles.editBtn} onClick={addEditableNoteHandler}>
        <img src="src/assets/icons/edit-btn.svg" alt="edit-btn"/>
      </div>

    </div>
  );
};

export default SearchedNoteItem;