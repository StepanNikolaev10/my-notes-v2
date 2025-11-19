import { ACTIVE_PAGES_FOR_BTNS } from '../../../../constants/activePagesForBtns';
import AppName from '../../UI/AppName/AppName';
import styles from './NotAuthorizedHeader.module.scss';
import { Link } from 'react-router';

const NotAuthorizedHeader = ({ currentPage }) => {
  return (
    <header className={styles.notAuthorizedHeader}>
      <AppName/>
      <nav className={styles.authLinks}>
        <Link to="/sign-in" className={`${styles.link} ${currentPage === ACTIVE_PAGES_FOR_BTNS.SIGN_IN ? styles.opened : ''}`}>
          Login
        </Link>
        <Link to="/sign-up" className={`${styles.link} ${currentPage === ACTIVE_PAGES_FOR_BTNS.SIGN_UP ? styles.opened : ''}`}>
          Sign up
        </Link>
      </nav>
    </header>
  )
}
export default NotAuthorizedHeader