import styles from './NoteItem.module.scss';
import { useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

const NoteItem = ({ id, content, onEditNotes, isEdit, noteStyles }) => {
  const router = useNavigate();

  const rootStyles = [styles.noteItem]

  if(isEdit) {
    rootStyles.push(styles.editable);
  }

  const editNote = (e) => {
    e.stopPropagation();
    onEditNotes(id)
  }

  return (
    <div 
      className={rootStyles.join(' ')} 
      style={{
        backgroundColor: noteStyles.color,
        border: noteStyles.color && !isEdit && 'none'
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

      <div className={styles.editBtn} onClick={editNote}>
        <img src="src/assets/icons/edit-btn.svg" alt="edit-btn"/>
      </div>

    </div>
  );
};

export default NoteItem