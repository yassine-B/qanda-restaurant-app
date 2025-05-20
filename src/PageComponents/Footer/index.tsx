import React from 'react';
import { useTranslation } from 'next-i18next';
import Styles from './Footer.module.css';
import Text from '@src/Components/Text';

export default function Footer() {
  const { t } = useTranslation('common');
  return (
    <footer className={Styles.footer}>
      <Text alignText="center" color="white">
        {t('footer.footer_copyright')}
      </Text>
    </footer>
  );
}
