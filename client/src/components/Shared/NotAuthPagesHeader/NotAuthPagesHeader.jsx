import { AUTH_PAGE_VARIANTS } from '../../../constants/authPageVariants';
import AppName from '../UI/AppName/AppName';
import Header from '../UI/Header/Header';
import styles from './NotAuthPagesHeader.module.scss';
import { Link } from 'react-router';

const NotAuthPagesHeader = ({ currentPage }) => {
  return (
    <Header>
      <AppName/>
      <nav className={styles.authLinks}>
        <Link to="/sign-in" className={`${styles.link} ${currentPage === AUTH_PAGE_VARIANTS.SIGN_IN ? styles.opened : ''}`}>
          Login
        </Link>
        <Link to="/sign-up" className={`${styles.link} ${currentPage === AUTH_PAGE_VARIANTS.SIGN_UP ? styles.opened : ''}`}>
          Sign up
        </Link>
      </nav>
    </Header>
  )
}
export default NotAuthPagesHeader;