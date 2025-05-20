import React from 'react';
import { useTranslation } from 'next-i18next';
import Styles from './Gallery.module.css';

import GalleryGrid from './GalleryGrid';

import Button from '@src/Components/Button';
import Wrapper from '@src/Components/Wrapper';
import SectionHeader from '@src/Components/SectionHeader';

export default function gallery() {
  const { t } = useTranslation('gallery');
  return (
    <section id="gallery">
      <Wrapper>
        <SectionHeader
          headerTitle={t('gallery.title')}
          headerDescription={t('gallery.description')}
        />

        <GalleryGrid />
        <div className={Styles.load_more_btn}>
          <Button>{t('gallery.button')}</Button>
        </div>
      </Wrapper>
    </section>
  );
}
