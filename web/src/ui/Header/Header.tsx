import type { ReactNode } from 'react';
import styles from './Header.module.scss';

const Header = ({ children }: { children: ReactNode }) => {
  return <header className={styles.header}>{children}</header>;
};

export default Header;
