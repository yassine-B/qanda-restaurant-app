import React from 'react';
import { useTranslation } from 'next-i18next';
import { Link } from 'react-scroll';
import Styles from './Header.module.css';
import { useReSize } from '@src/hooks/useResize';

interface scrollLink {
  path: string;
  icon: JSX.Element;
  onClick?: () => void;
}
function scrollLink({ path, icon, onClick }: scrollLink) {
  const [width] = useReSize();
  const { t } = useTranslation('header');

  return (
    <Link
      to={path}
      className={Styles.navigation_list_item}
      activeClass={Styles.active_navigation_item}
      onClick={onClick && onClick}
      spy={true}
      smooth={true}
      hashSpy={true}
      offset={width <= 768 ? -120 : -80}
      duration={1000}
      delay={500}
      isDynamic={true}
      ignoreCancelEvents={false}>
      {icon && icon} <div>{t(`header.${path}`)}</div>
    </Link>
  );
}

export default scrollLink;
