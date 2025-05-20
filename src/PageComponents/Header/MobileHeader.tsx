import React from 'react';
import Styles from './Header.module.css';
import { navigationList } from '@public/dummyData';
import { CloseIcon, MobileHeaderMenuIcon } from '@public/dummyData/Icons';

import Logo from './Logo';
import ScrollLink from './ScrollLink';
import Overlay from '@src/Components/Overlay';
import { useToggle } from '@src/hooks/useToggle';
import ThemeToggler from '@src/Components/ThemeToggler';
import { LanguagesDropdown } from '@src/Components/LanguagesDropdown';

const NavigationItems = ({ onClose }: { onClose: () => void }) => {
  const navigationItemsList = navigationList.map((navigationItem) => {
    return (
      <li onClick={onClose} key={navigationItem.path}>
        <ScrollLink path={navigationItem.path} icon={navigationItem.icon} onClick={onClose} />
      </li>
    );
  });
  return (
    <nav>
      <ul className={Styles.navigation_list}>{navigationItemsList}</ul>
    </nav>
  );
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useToggle();

  return (
    <>
      <Overlay open={isOpen} onClose={onClose} />

      <div
        className={`${Styles.mobile_header_sidebar} ${
          isOpen ? Styles.show_mobile_header_sidebar : Styles.hide_mobile_header_sidebar
        }`}>
        <Logo styles={Styles.sidebar_logo} />
        <NavigationItems onClose={onClose} />
      </div>

      <header className={Styles.header}>
        <Logo />

        <div className={Styles.mobile_header_icons}>
          <ThemeToggler />
          <LanguagesDropdown />
          <button className={Styles.mobile_menu_button} onClick={onOpen}>
            {isOpen ? <CloseIcon /> : <MobileHeaderMenuIcon />}
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;
