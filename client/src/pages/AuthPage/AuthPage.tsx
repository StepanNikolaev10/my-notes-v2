import styles from './AuthPage.module.scss';
import AuthPageMain from '../../components/AuthPage/AuthPageMain/AuthPageMain';
import NotAuthPagesHeader from '../../components/Shared/NotAuthPagesHeader/NotAuthPagesHeader';
import type NotAuthPagesVariants from '../../types/NotAuthPagesVariants';

const AuthPage = ({ pageVariant }:NotAuthPagesVariants) => {

  return (
    <div className={styles.authPage}>
      <NotAuthPagesHeader pageVariant={pageVariant}/>
      <AuthPageMain pageVariant={pageVariant}/>
    </div>
  )
}
export default AuthPage;