import styles from './AuthPage.module.scss';
import AuthPageMain from '../../components/AuthPage/AuthPageMain/AuthPageMain';
import NotAuthPagesHeader from '../../components/Shared/NotAuthPagesHeader/NotAuthPagesHeader';
import type { NotAuthPageVariants } from '../../types/ui';

interface AuthPageProps {
  pageVariant: NotAuthPageVariants
}

const AuthPage = ({ pageVariant }: AuthPageProps) => {

  return (
    <div className={styles.authPage}>
      <NotAuthPagesHeader pageVariant={pageVariant}/>
      <AuthPageMain pageVariant={pageVariant}/>
    </div>
  )
}
export default AuthPage;