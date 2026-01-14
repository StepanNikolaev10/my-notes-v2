import styles from './TrashPageHeader.module.scss';
import BurgerBtn from '../../Shared/UI/BurgerBtn/BurgerBtn';
import Header from '../../Shared/UI/Header/Header';
import useSidebarStore from '../../../store/useSidebarStore';
import SearchIcon from '/src/assets/icons/search.svg?react';
import MoreIcon from '/src/assets/icons/more.svg?react';

const TrashPageHeader = () => {
  const toggleSidebar = useSidebarStore(state => state.toggleSidebar);

  return (
    <Header>
      <div className={styles.container}>
        <BurgerBtn onClick={toggleSidebar}/>
        <div className={styles.pageName}>Trash</div>
      </div>
      <div className={styles.container}>
        <button className={styles.searchBtn}>
          <SearchIcon
            style={{fill: 'rgb(230, 230, 230)'}}
          />
        </button>
        <button className={styles.openDropdownMenuBtn}>
          <MoreIcon
            style={{fill: 'rgb(230, 230, 230)'}}
          />
        </button>
      </div>
    </Header>
  )
}
export default TrashPageHeader;