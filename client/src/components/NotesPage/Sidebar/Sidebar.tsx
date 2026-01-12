import styles from './Sidebar.module.scss';
import Backdrop from '../../Shared/UI/Backdrop/Backdrop';
import CrossIcon from '/src/assets/icons/cross.svg?react';
import { Link, useLocation } from 'react-router-dom';
import NotesIcon from '/src/assets/icons/notes.svg?react';
import ArchiveIcon from '/src/assets/icons/archive.svg?react';
import TrashIcon from '/src/assets/icons/trash-can.svg?react';

interface SidebarProps {
  isSidebarOpen: boolean;
  onCloseSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, onCloseSidebar }: SidebarProps) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Notes', path: '/', iconElement: <NotesIcon/> },
    { name: 'Archive', path: '/archive',iconElement: <ArchiveIcon/> },
    { name: 'Trash', path: '/trash', iconElement: <TrashIcon/> },
  ];

  return (
    <Backdrop isOpen={isSidebarOpen} onClose={onCloseSidebar}>
      <div 
        className={`${styles.sidebar} ${isSidebarOpen ? styles.opened : ''}`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <div className={styles.appName}>My notes</div>
          <button className={styles.closeSideBarBtn} onClick={onCloseSidebar}>
            <CrossIcon
              style={{
                fill: 'rgb(230, 230, 230)'
              }}
            />
          </button>
        </div>
        <div className={styles.main}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li 
                key={item.name} 
                className={`${styles.navItem} ${
                  location.pathname === item.path ? styles.active : ''
                }`}
              >
                {item.iconElement}
                <Link to={item.path} className={styles.navLink}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Backdrop>
  )
}

export default Sidebar;