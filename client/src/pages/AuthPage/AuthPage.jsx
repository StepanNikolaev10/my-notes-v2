import NotAuthorizedHeader from '../../components/Shared/NotAuthorizedHeader/NotAuthorizedHeader';
import styles from './AuthPage.module.scss';
import AuthPageMain from '../../components/AuthPage/AuthPageMain/AuthPageMain';

const AuthPage = ({ pageVariant }) => {
  return (
    <div className={styles.authPage}>
      <NotAuthorizedHeader currentPage={pageVariant}/>
      <AuthPageMain pageVariant={pageVariant}/>
    </div>
  )
}
export default AuthPage;