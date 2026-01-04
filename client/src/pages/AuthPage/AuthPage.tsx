import styles from './AuthPage.module.scss';
import AuthPageMain from '../../components/AuthPage/AuthPageMain/AuthPageMain';
import NotAuthPagesHeader from '../../components/Shared/NotAuthPagesHeader/NotAuthPagesHeader';
import type { AuthPageVariants } from '../../types/AuthPageTypes';

const AuthPage: React.FC<AuthPageVariants> = ({ pageVariant }) => {
  return (
    <div className={styles.authPage}>
      <NotAuthPagesHeader currentPage={pageVariant}/>
      <AuthPageMain pageVariant={pageVariant}/>
    </div>
  )
}
export default AuthPage;