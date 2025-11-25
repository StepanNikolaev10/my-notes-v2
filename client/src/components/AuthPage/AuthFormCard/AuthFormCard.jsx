import styles from './AuthFormCard.module.scss';
import { AUTH_PAGE_VARIANTS } from '../../../constants/authPageVariants';
import AuthForm from '../AuthForm/AuthForm';

const AuthFormCard = ({ pageVariant }) => {
  return (
    <div className={styles.authFormCard}>
      {pageVariant === AUTH_PAGE_VARIANTS.SIGN_IN && (
        <>
          <h2>Welcome back!</h2>
          <p className={styles.subText}>Sign in to your account</p>
          <AuthForm pageVariant={pageVariant}/>
          <div className={styles.linkText}>
            Don't have an account? <a href="#" className={styles.bottomLink}>Sign up</a>
          </div>
        </>
      )}
      {pageVariant === AUTH_PAGE_VARIANTS.SIGN_UP && (
        <>
          <h2>Create account</h2>
          <p className={styles.subText}>Sign up to get started</p>
          <AuthForm pageVariant={pageVariant}/>
          <div className={styles.linkText}>
            Already have an account? <a href="#" className={styles.bottomLink}>Log in</a>
          </div> 
        </>
      )}
    </div>
  )
}
export default AuthFormCard;