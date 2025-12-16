import NoteItem from "../NoteItem/NoteItem";
import styles from "./NotesPageMain.module.scss";
import NoteAddBtn from "../UI/NoteAddBtn/NoteAddBtn";
import { MODAL_CONTENT_VARIANTS } from "../../../constants/modalContentVariants";

const NotesPageMain = ({ onOpenModal, notes }) => {

  return (
    <main className={styles.notesPageMain}>
      {notes.length > 0 ? (
        <div className={styles.notes}>
          {
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
          }
        </div>
      ) : (
        <div className={styles.emptyNotesText}>Your notes is empty</div>
      )}

      <NoteAddBtn onClick={() => onOpenModal(MODAL_CONTENT_VARIANTS.NOTE_ADDING)}/>
    </main>
  );
};

export default NotesPageMain;
