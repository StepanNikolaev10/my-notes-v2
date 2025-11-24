import NoteItem from "../NoteItem/NoteItem";
import styles from "./NotesPageDisplay.module.scss";

const NotesPageDisplay = ({ notes, onTextChange, onEditNotes, editableNotes }) => {
  return (
    <div className={styles.notesPageDisplay}>
      {notes.length > 0 ? (
        notes.map(note => {
          const isEdit = editableNotes.some(editable => editable.id === note.id);
          return (
            <NoteItem
              key={note.id}
              id={note.id}
              content={note.content}
              onTextChange={onTextChange}
              onEditNotes={onEditNotes}
              isEdit={isEdit}
              noteStyles={note.styles}
            />
          );
        })
      ) : (
        <div className={styles.emptyNotesText}>Your notes is empty</div>
      )}
    </div>
  );
};

export default NotesPageDisplay;
