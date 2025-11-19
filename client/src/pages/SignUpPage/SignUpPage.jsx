import NotAuthorizedHeader from '../../components/Shared/Containers/NotAuthorizedHeader/NotAuthorizedHeader';
import SignUpPageDisplay from '../../components/SignUpPage/Containers/SignUpPageDisplay/SignUpPageDisplay';
import { ACTIVE_PAGES_FOR_BTNS } from '../../constants/activePagesForBtns';
import styles from './SignUpPage.module.scss';

const SignUpPage = () => {
  return (
    <div className={styles.signInPage}>
      <NotAuthorizedHeader currentPage={ACTIVE_PAGES_FOR_BTNS.SIGN_UP}/>
      <SignUpPageDisplay/>
    </div>
  )
}
export default SignUpPage;