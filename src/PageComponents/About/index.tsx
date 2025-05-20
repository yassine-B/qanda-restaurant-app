import React from 'react';
import Image from 'next/image';
import history from 'next/router';
import { useTranslation } from 'next-i18next';
import Styles from './About.module.css';
import AboutImg from '@public/assets/about-img.png';

import Text from '@src/Components/Text';
import Title from '@src/Components/Title';
import Button from '@src/Components/Button';

export default function About() {
  const { t } = useTranslation('about');
  return (
    <section id="about" className={Styles.about_grid}>
      <div className={Styles.about_image_container}>
        <Image
          width={300}
          height={430}
          placeholder="blur"
          blurDataURL={AboutImg.blurDataURL}
          src={AboutImg.src}
          alt="about us image "
        />
      </div>
      <div className={Styles.about_description_container}>
        <Title styles={Styles.about_title}>{t('about.title')}</Title>

        <div className={Styles.about_description}>
          <Text>{t('about.description_1')}</Text>
          <Text>{t('about.description_2')}</Text>
          <Text>{t('about.description_3')}</Text>
        </div>

        <Button
          onClick={() => {
            return history.push('#contact');
          }}>
          {t('about.button')}
        </Button>
      </div>
    </section>
  );
}
