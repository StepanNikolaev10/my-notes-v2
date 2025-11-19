import { useNavigate } from 'react-router-dom';
import NotAuthorizedHeader from '../../components/Shared/Containers/NotAuthorizedHeader/NotAuthorizedHeader';
import SignInPageDisplay from '../../components/SignInPage/Containers/SignInPageDisplay/SignInPageDisplay';
import { ACTIVE_PAGES_FOR_BTNS } from '../../constants/activePagesForBtns';
import styles from './SignInPage.module.scss';
import { useContext } from 'react';
import { AuthContext } from '../../context';

const SignInPage = () => {
  const router = useNavigate();
  const { setIsAuth } = useContext(AuthContext);

  const signIn = (e) => {
    e.preventDefault();
    localStorage.setItem('auth', 'true');
    setIsAuth(true);
    router(`/`);
  }
  return (
    <div className={styles.signInPage}>
      <NotAuthorizedHeader currentPage={ACTIVE_PAGES_FOR_BTNS.SIGN_IN}/>
      <SignInPageDisplay onSignIn={signIn}/>
    </div>
  )
}
export default SignInPage