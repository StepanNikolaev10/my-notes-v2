import NoteItem from "../../Shared/NoteItem/NoteItem";
import styles from "./NotesPageMain.module.scss";
import NoteAddBtn from "../UI/NoteAddBtn/NoteAddBtn";
import type { ModalContentVariants } from "../../../types/ui";

interface NotesPageMainProps {
  onOpenModal: (modalType: ModalContentVariants) => void,
  notes: any
}

const NotesPageMain = ({ onOpenModal, notes }:NotesPageMainProps) => {

  return (
    <main className={styles.notesPageMain}>
      {notes.length > 0 ? (
        <div className={styles.notes}>
          {
            notes.map((note: any) => {
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

      <NoteAddBtn onClick={() => onOpenModal('NOTE_ADDING')}/>
    </main>
  );
};

export default NotesPageMain;
