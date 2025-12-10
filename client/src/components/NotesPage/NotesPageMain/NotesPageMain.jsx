import NoteItem from "../NoteItem/NoteItem";
import styles from "./NotesPageMain.module.scss";
import NoteAddBtn from "../UI/NoteAddBtn/NoteAddBtn";
import { MODAL_CONTENT_VARIANTS } from "../../../constants/modalContentVariants";

const NotesPageMain = ({ onOpenModal, notes }) => {

  return (
    <div className={styles.notesPageMain}>
      <div className={styles.notes}>
        {notes.length > 0 ? (
          notes.map(note => {
            return (
              <NoteItem
                key={note.id}
                id={note.id}
                content={note.content}
                noteStyles={note.styles}
              />
            );
          })
        ) : (
          <div className={styles.emptyNotesText}>Your notes is empty</div>
        )}
      </div>

      <NoteAddBtn onClick={() => onOpenModal(MODAL_CONTENT_VARIANTS.NOTE_ADDING)}/>
    </div>
  );
};

export default NotesPageMain;
