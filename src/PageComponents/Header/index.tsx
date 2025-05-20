import React from 'react';
import Styles from './Header.module.css';
import { navigationList } from '@public/dummyData';

import Logo from './Logo';
import ScrollLink from './ScrollLink';
import { useReSize } from '@src/hooks/useResize';
import MobileHeader from './MobileHeader';
import ThemeToggler from '@src/Components/ThemeToggler';
import { LanguagesDropdown } from '@src/Components/LanguagesDropdown';

const DesktopHeader = () => {
  const result = navigationList.map((navigationItem) => {
    return (
      <li key={navigationItem.path}>
        <ScrollLink path={navigationItem.path} />
      </li>
    );
  });
  return (
    <header className={Styles.header}>
      <Logo />
      <nav className={Styles.navigation}>
        <ul className={Styles.navigation_list}>
          {result}
          <li className={Styles.header_list_item_theme}>
            <ThemeToggler />
          </li>
          <li className={Styles.header_list_item_theme}>
            <LanguagesDropdown />
          </li>
        </ul>
      </nav>
    </header>
  );
};
const Header = () => {
  const [width] = useReSize();
  return (
    <>
      {width > 768 && <DesktopHeader />}
      {width <= 768 && <MobileHeader />}
    </>
  );
};
export default Header;
