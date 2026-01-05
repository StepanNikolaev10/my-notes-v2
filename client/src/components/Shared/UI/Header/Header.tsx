import type { ComponentPropsWithoutRef } from 'react';
import styles from './Header.module.scss';

interface HeaderProps extends ComponentPropsWithoutRef<'header'> {}

const Header = ({ children, ...props }: HeaderProps) => {
  return (
    <header className={styles.header} {...props}>
      {children}
    </header>
  );
};

export default Header;
