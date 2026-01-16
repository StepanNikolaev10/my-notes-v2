import styles from './NoteItem.module.scss';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import useSelectedNotesStore from '../../../../store/useSelectedNotesStore';
import { NOTE_COLORS } from '../../../../constants/noteColors';
import type { Note } from '../../../../types/entities';

interface NoteItemProps {
  id: Note['id'];
  content: Note['content'];
  noteStyles: Note['noteStyles'];
}

const NoteItem = ({ id, content, noteStyles }: NoteItemProps) => {
  const selectedNotesIds = useSelectedNotesStore(state => state.selectedNotesIds);
  const toggleSelectNote = useSelectedNotesStore(state => state.toggleSelectNote);

  const router = useNavigate();

  const rootStyles = [styles.noteItem]

  const isEditable = selectedNotesIds.some(editableNoteId => editableNoteId === id);
  if(isEditable) {
    rootStyles.push(styles.editable);
  }

  const addEditableNoteHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    toggleSelectNote(id)
  }

  return (
    <div 
      className={rootStyles.join(' ')} 
      style={{
        backgroundColor: NOTE_COLORS[noteStyles.color]
      }}
      onClick={() => router(`/notes/${id}`)}
    >

      <div className={styles.noteContent}>
        <div 
          className={styles.title}
          style={{
            marginBottom: content.title && content.mainText && '10px'
          }}
        >
          {content.title}
        </div>
        <div className={styles.mainText}>
          {parse(DOMPurify.sanitize(content.mainText))}
        </div>
      </div>

      <div className={styles.editBtn} onClick={addEditableNoteHandler}>
        <img src="src/assets/icons/edit-btn.svg" alt="edit-btn"/>
      </div>

    </div>
  );
};

export default NoteItem;