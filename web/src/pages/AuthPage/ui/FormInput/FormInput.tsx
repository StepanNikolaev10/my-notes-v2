import styles from './FormInput.module.scss';

const FormInput = ({
  name,
  type,
  placeholder,
}: {
  name: string;
  type: string;
  placeholder: string;
}) => {
  return (
    <input
      className={styles.formInput}
      name={name}
      type={type}
      placeholder={placeholder}
      autoComplete="true"
    ></input>
  );
};

export default FormInput;
