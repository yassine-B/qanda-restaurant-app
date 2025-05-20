import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Styles from './Menu.module.css';
import { menuList } from '@public/dummyData';

import Text from '@src/Components/Text';
import Title from '@src/Components/Title';
import Wrapper from '@src/Components/Wrapper';
import SectionHeader from '@src/Components/SectionHeader';
import { useReSize } from '@src/hooks/useResize';

const MenuList = () => {
  const [width] = useReSize();
  const { t } = useTranslation('menu');
  const result = menuList.map((menuItem) => {
    const { id, imageSource, imageDescription, price } = menuItem;
    return (
      <Link key={id} href="#menu">
        <div className={Styles.menu_item}>
          <Image
            width={width > 840 ? 160 : width < 840 && width > 600 ? 300 : 480}
            height={width > 840 ? 160 : 200}
            placeholder="blur"
            className={Styles.menu_image_container}
            blurDataURL={imageSource.blurDataURL}
            src={imageSource.src}
            alt={imageDescription}
          />

          <div className={Styles.menu_description}>
            <Title color="black" size="small">
              {t(`menu.menu_items.${id}.title`)} -----{' '}
              <span className={Styles.menu_price_color}>${price}</span>
            </Title>
            <Text color="black">{t(`menu.menu_items.${id}.description`)}</Text>
          </div>
        </div>
      </Link>
    );
  });
  return <div className={Styles.menu_container}>{result}</div>;
};
const Menu = () => {
  const { t } = useTranslation('menu');
  return (
    <section id="menu">
      <Wrapper>
        <SectionHeader headerTitle={t('menu.title')} headerDescription={t('menu.description')} />
        <MenuList />
      </Wrapper>
    </section>
  );
};

export default Menu;
