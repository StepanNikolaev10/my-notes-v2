import DefaultContent from './DefaultContent/DefaultContent';
import EditNoteContent from './EditNoteContent/EditNoteContent';
import useEditableNotesStore from '../../../store/useEditableNotesStore';
import Header from '../../Shared/UI/Header/Header';

interface NotesPageHeaderProps {
  onOpenModal: (variant: string) => void
  onToggleSidebar: () => void;
}

const NotesPageHeader = ({ onOpenModal, onToggleSidebar }: NotesPageHeaderProps) => {;
  const editableNotesIds = useEditableNotesStore(state => state.editableNotesIds);

  return (
    <Header>
      {editableNotesIds.length > 0 
      ? 
        (
          <EditNoteContent onOpenModal={onOpenModal}/>
        ) 
      : 
        (
          <DefaultContent onOpenModal={onOpenModal} onToggleSidebar={onToggleSidebar}/>
        )
      }
    </Header>
  )
}

export default NotesPageHeader;
