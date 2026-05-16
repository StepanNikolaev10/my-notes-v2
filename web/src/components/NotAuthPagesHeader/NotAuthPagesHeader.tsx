import AppName from '../../ui/AppName/AppName';
import Header from '../../ui/Header/Header';
import styles from './NotAuthPagesHeader.module.scss';
import { Link } from 'react-router-dom';

const NotAuthPagesHeader = ({
  selectedAuthMethod,
}: {
  selectedAuthMethod?: 'sign-in' | 'sign-up';
}) => {
  return (
    <Header>
      <div className={styles.content}>
        <AppName />
        <nav className={styles.authLinks}>
          <Link
            to="/sign-in"
            className={`${styles.link} ${selectedAuthMethod === 'sign-in' ? styles.opened : ''}`}
          >
            Login
          </Link>
          <Link
            to="/sign-up"
            className={`${styles.link} ${selectedAuthMethod === 'sign-up' ? styles.opened : ''}`}
          >
            Sign up
          </Link>
        </nav>
      </div>
    </Header>
  );
};
export default NotAuthPagesHeader;
