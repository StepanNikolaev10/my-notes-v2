import styles from './SignInPageDisplay.module.scss';

const SignInPageDisplay = () => {
  return (
    <div className={styles.signInPageDisplay}>
      <div className={styles.formCard}>
        <h2>Welcome back!</h2>
        <p className={styles.subText}>Sign in to your account</p>

        <form className={styles.authForm}>
          <input type="email" placeholder="Email address" className={styles.inputField} />
          <input type="password" placeholder="Password" className={styles.inputField} />
          
          <button type="submit" className={styles.button}>
            Sign In
          </button>
          
          <a href="#" className={styles.forgotPassword}>
            Forgot password
          </a>
        </form>

        <div className={styles.linkText}>
          Don't have an account? <a href="#" className={styles.bottomLink}>Sign up</a>
        </div>
      </div>
    </div>
  )
}
export default SignInPageDisplay