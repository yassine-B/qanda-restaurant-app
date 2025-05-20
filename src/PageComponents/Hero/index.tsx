import React from 'react';
import history from 'next/router';
import { useTranslation } from 'next-i18next';
import Styles from './Hero.module.css';

import Text from '@src/Components/Text';
import Title from '@src/Components/Title';
import Button from '@src/Components/Button';

const Hero = () => {
  const { t } = useTranslation('hero');
  return (
    <section id="home" className={`${Styles.hero_bg} shared_bg`}>
      <div className={`${Styles.hero} `}>
        <Title size="large" color="white" styles={Styles.hero_title}>
          {t('hero.title')}
        </Title>
        <Title size="small" color="white" styles={Styles.hero_sub_title}>
          {t('hero.subTitle')}
        </Title>
        <Text color="white" alignText="center" styles={Styles.hero_text}>
          {t('hero.description')}
        </Text>
        <Button
          styles={Styles.hero_button}
          onClick={() => {
            return history.push('#menu');
          }}>
          {t('hero.button')}
        </Button>
      </div>
    </section>
  );
};
export default Hero;
