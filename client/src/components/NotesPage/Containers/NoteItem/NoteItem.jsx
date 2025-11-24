import EditNoteBtn from '../../UI/EditNoteBtn/EditNoteBtn.jsx';
import styles from './NoteItem.module.scss';
import { useNavigate } from 'react-router-dom';

const NoteItem = ({ id, content, onEditNotes, isEdit, noteStyles }) => {
  const router = useNavigate();

  const rootStyles = [styles.noteItem]

  if(isEdit) {
    rootStyles.push(styles.editable);
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
        <div className={styles.mainText}>{content.mainText}</div>
      </div>
      <EditNoteBtn
        onClick={(e) => {
          e.stopPropagation();
          onEditNotes(id)
        }}
      />
    </div>
  );
};

export default NoteItem