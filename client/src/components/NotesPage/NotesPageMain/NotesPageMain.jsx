import NoteItem from "../NoteItem/NoteItem";
import styles from "./NotesPageMain.module.scss";
import NoteAddBtn from "../UI/NoteAddBtn/NoteAddBtn";
import { MODAL_VARIANTS } from "../../../constants/modalVariants";
import useNotesStore from "../../../store/useNotesStore";

const NotesPageMain = ({ onOpenModal }) => {
  const notes = useNotesStore(state => state.notes);

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

      <NoteAddBtn onClick={() => onOpenModal(MODAL_VARIANTS.NOTE_ADD)}/>
    </div>
  );
};

export default NotesPageMain;
