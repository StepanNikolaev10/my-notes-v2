import useSelectedNotesStore from '../../../store/useSelectedNotesStore';
import Header from '../../Shared/UI/Header/Header';
import DefaultContent from './DefaultContent/DefaultContent';
import NotesSelectedContent from './NotesSelectedContent/NotesSelectedContent';

const TrashPageHeader = () => {
  const selectedNotesIds = useSelectedNotesStore(state => state.selectedNotesIds);

  return (
    <Header>
      {selectedNotesIds.length > 0 
        ? <NotesSelectedContent/>
        : <DefaultContent/>
      }
    </Header>
  )
}
export default TrashPageHeader;