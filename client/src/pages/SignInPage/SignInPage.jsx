import NotAuthorizedHeader from '../../components/Shared/Containers/NotAuthorizedHeader/NotAuthorizedHeader';
import SignInPageDisplay from '../../components/SignInPage/Containers/SignInPageDisplay/SignInPageDisplay';
import { ACTIVE_PAGES_FOR_BTNS } from '../../constants/activePagesForBtns';
import styles from './SignInPage.module.scss';

const SignInPage = () => {
  return (
    <div className={styles.signInPage}>
      <NotAuthorizedHeader currentPage={ACTIVE_PAGES_FOR_BTNS.SIGN_IN}/>
      <SignInPageDisplay/>
    </div>
  )
}
export default SignInPage