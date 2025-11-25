import NotAuthorizedHeader from '../../components/Shared/Containers/NotAuthorizedHeader/NotAuthorizedHeader';
import styles from './AuthPage.module.scss';
import AuthPageMain from '../../components/AuthPage/AuthPageMain/AuthPageMain';

const AuthPage = ({ pageVariant }) => {
  return (
    <div className={styles.signInPage}>
      <NotAuthorizedHeader currentPage={pageVariant}/>
      <AuthPageMain pageVariant={pageVariant}/>
    </div>
  )
}
export default AuthPage;