import Sidebar from '../components/Shared/Sidebar/Sidebar';
import TrashPageHeader from '../components/TrashPage/TrashPageHeader/TrashPageHeader';
import TrashPageMain from '../components/TrashPage/TrashPageMain/TrashPageMain';
import useNotesStore from '../store/useNotesStore';
import PageWrapper from '../components/Shared/UI/PageWrapper/PageWrapper';

const TrashPage = () => {
  const trashedNotes = useNotesStore(state => state.trashedNotes);

  return (
    <PageWrapper>
      <TrashPageHeader/>
      <Sidebar/>
      <TrashPageMain notes={trashedNotes}/>
    </PageWrapper>
  )
}
export default TrashPage;