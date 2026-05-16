import FormCard from '../../ui/FormCard/AuthFormCard';
import FormInput from '../../ui/FormInput/FormInput';
import SubmitFormBtn from '../../ui/SubmitFormBtn/SubmitFormBtn';
import styles from './SignUpForm.module.scss';

const SignUpForm = () => {
  return (
    <FormCard>
      <form className={styles.signUpForm}>
        <FormInput name="email" type="email" placeholder="Email address" />
        <FormInput name="username" type="text" placeholder="Username" />
        <FormInput name="password" type="password" placeholder="Password" />
        <SubmitFormBtn>Sign Up</SubmitFormBtn>
      </form>
    </FormCard>
  );
};
export default SignUpForm;
