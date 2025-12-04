import SearchNotesPageHeader from '../../components/SearchNotesPage/SearchNotesPageHeader/SearchNotesPageHeader';
import SearchNotesPageMain from '../../components/SearchNotesPage/SearchNotesPageMain/SearchNotesPageMain';
import styles from './SearchNotesPage.module.scss';

const SearchNotesPage = () => {
  return (
    <div className={styles.searchNotesPage}>
      <SearchNotesPageHeader/>
      <SearchNotesPageMain/>
    </div>
  )
}
export default SearchNotesPage