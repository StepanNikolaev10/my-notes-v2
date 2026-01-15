import DefaultContent from './DefaultContent/DefaultContent';
import EditNoteContent from './EditNoteContent/EditNoteContent';
import useSelectedNotesStore from '../../../store/useSelectedNotesStore';
import Header from '../../Shared/UI/Header/Header';

interface NotesPageHeaderProps {
  onOpenModal: (variant: string) => void;
}

const NotesPageHeader = ({ onOpenModal }: NotesPageHeaderProps) => {;
  const selectedNotesIds = useSelectedNotesStore(state => state.selectedNotesIds);

  return (
    <Header>
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
    </Header>
  )
}

export default NotesPageHeader;
