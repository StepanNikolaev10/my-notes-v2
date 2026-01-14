import styles from './NoteItem.module.scss';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import useEditableNotesStore from '../../../../store/useEditableNotesStore';

interface NoteItemProps {
  id: string,
  content: any,
  noteStyles: any
}

const NoteItem = ({ id, content, noteStyles }: NoteItemProps) => {
  const editableNotesIds = useEditableNotesStore(state => state.editableNotesIds);
  const addEditableNoteId = useEditableNotesStore(state => state.addEditableNoteId);

  const router = useNavigate();

  const rootStyles = [styles.noteItem]

  const isEditable = editableNotesIds.some((editableNoteId:any) => editableNoteId === id);
  if(isEditable) {
    rootStyles.push(styles.editable);
  }

  const addEditableNoteHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    addEditableNoteId(id)
  }

  return (
    <div 
      className={rootStyles.join(' ')} 
      style={{
        backgroundColor: noteStyles.color,
        border: noteStyles.color && !isEditable && 'none'
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