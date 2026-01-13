import DefaultContent from './DefaultContent/DefaultContent';
import EditNoteContent from './EditNoteContent/EditNoteContent';
import useEditableNotesStore from '../../../store/useEditableNotesStore';
import Header from '../../Shared/UI/Header/Header';

interface MainHeaderProps {
  onOpenModal: (variant: string) => void;
  onToggleSidebar: () => void;
}

const MainHeader = ({ onOpenModal, onToggleSidebar }: MainHeaderProps) => {;
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

export default MainHeader;
