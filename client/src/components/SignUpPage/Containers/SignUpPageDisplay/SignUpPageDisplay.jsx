import styles from './SignUpPageDisplay.module.scss';

const SignUpPageDisplay = () => {
  return (
    <div className={styles.signUpPageDisplay}>
      <div className={styles.formCard}>
        <h2>Join My Notes today!</h2>
        <p className={styles.subText}>Create your account</p>

        <form className={styles.authForm}>
          <input type="email" placeholder="Email address" className={styles.inputField} />
          <input type="password" placeholder="Password" className={styles.inputField} />
          <button type="submit" className={styles.button}>
            Sign up
          </button>
        </form>
        <div className={styles.linkText}>
          Already have an account? <a href="#" className={styles.bottomLink}>Log in</a>
        </div>
      </div>
    </div>
  )
}
export default SignUpPageDisplay