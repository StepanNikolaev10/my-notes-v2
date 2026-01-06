import AppName from '../UI/AppName/AppName';
import Header from '../UI/Header/Header';
import styles from './NotAuthPagesHeader.module.scss';
import { Link } from 'react-router-dom';
import type { NotAuthPageVariants } from '../../../types/sharedProps';

interface NotAuthPagesHeaderProps {
  pageVariant: NotAuthPageVariants
}

const NotAuthPagesHeader = ({ pageVariant }: NotAuthPagesHeaderProps) => {
  return (
    <Header>
      <AppName/>
      <nav className={styles.authLinks}>
        <Link to="/sign-in" className={`${styles.link} ${pageVariant === 'SIGN_IN' ? styles.opened : ''}`}>
          Login
        </Link>
        <Link to="/sign-up" className={`${styles.link} ${pageVariant === 'SIGN_UP' ? styles.opened : ''}`}>
          Sign up
        </Link>
      </nav>
    </Header>
  )
}
export default NotAuthPagesHeader;