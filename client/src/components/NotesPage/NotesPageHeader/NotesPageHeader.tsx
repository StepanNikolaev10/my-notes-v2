import styles from './NotesPageHeader.module.scss';
import DefaultContent from './DefaultContent/DefaultContent';
import EditNoteContent from './EditNoteContent/EditNoteContent';
import useSelectedNotesStore from '../../../store/useSelectedNotesStore';

interface NotesPageHeaderProps {
  onOpenModal: (variant: string) => void;
}

const NotesPageHeader = ({ onOpenModal }: NotesPageHeaderProps) => {;
  const selectedNotesIds = useSelectedNotesStore(state => state.selectedNotesIds);

  return (
    <header className={styles.header}>
      {selectedNotesIds.length > 0 
      ? 
        (
          <EditNoteContent onOpenModal={onOpenModal}/>
        ) 
      : 
        (
          <DefaultContent onOpenModal={onOpenModal}/>
        )
      }
    </header>
  )
}

export default NotesPageHeader;
