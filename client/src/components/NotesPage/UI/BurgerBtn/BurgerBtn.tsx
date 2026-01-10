import styles from './BurgerBtn.module.scss';
import BurgerIcon from '/src/assets/icons/burger.svg?react';

const BurgerBtn = () => {
  return (
    <button className={styles.burgerBtn}>
      <BurgerIcon
        className={styles.burgerIcon}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </button>
  )
}
export default BurgerBtn;