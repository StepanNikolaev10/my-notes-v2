import styles from "./NotesPageMain.module.scss";
import NoteAddBtn from "../UI/NoteAddBtn/NoteAddBtn";
import type { ModalContentVariants } from "../../../types/ui";
import type { Note } from "../../../types/entities";
import NotesList from "../../Shared/NotesList/NotesList";

interface NotesPageMainProps {
  onOpenModal: (modalType: ModalContentVariants) => void;
  notes: Note[]; 
}

const NotesPageMain = ({ onOpenModal, notes }:NotesPageMainProps) => {

  return (
    <main className={styles.notesPageMain}>
      <NotesList notes={notes}/>
      <NoteAddBtn onClick={() => onOpenModal('NOTE_ADDING')}/>
    </main>
  );
};

export default NotesPageMain;
