import AppName from '../../ui/AppName/AppName';
import Header from '../../ui/Header/Header';
import styles from './NotAuthPagesHeader.module.scss';
import { Link } from 'react-router-dom';

const NotAuthPagesHeader = () => {
  return (
    <Header>
      <AppName />
      <nav className={styles.authLinks}>
        <Link
          to="/sign-in"
          // className={`${styles.link} ${pageVariant === 'SIGN_IN' ? styles.opened : ''}`}
        >
          Login
        </Link>
        <Link
          to="/sign-up"
          // className={`${styles.link} ${pageVariant === 'SIGN_UP' ? styles.opened : ''}`}
        >
          Sign up
        </Link>
      </nav>
    </Header>
  );
};
export default NotAuthPagesHeader;
