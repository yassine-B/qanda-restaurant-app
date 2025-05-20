import React from 'react';
import { useTranslation } from 'next-i18next';
import Styles from './OpeningHours.module.css';

import Text from '@src/Components/Text';
import Title from '@src/Components/Title';
import SectionHeader from '@src/Components/SectionHeader';

const OpeningHoursItems = () => {
  const { t } = useTranslation('common');
  const result = ['part_1', 'part_2', 'part_3'].map((item) => {
    return (
      <div key={item} className={Styles.opening_hours_list_item}>
        <Title color="black" alignTitle="center" size="small">
          {t(`restaurant_opening.opening_hours.${item}.days`)}
        </Title>
        <Text color="black" alignText="center">
          {t(`restaurant_opening.opening_hours.${item}.time.from`)}{' '}
          <span className={Styles.dashes_line_color}>--</span>{' '}
          {t(`restaurant_opening.opening_hours.${item}.time.to`)}
        </Text>
      </div>
    );
  });
  return <div className={Styles.opening_hours_list}>{result}</div>;
};
export default function OpeningHours() {
  const { t } = useTranslation('common');
  return (
    <section id="opening" className={`shared_bg ${Styles.opening_hours_container} `}>
      <SectionHeader
        color="white"
        width="small"
        headerTitle={t('restaurant_opening.title')}
        headerDescription={t('restaurant_opening.description')}
      />
      <OpeningHoursItems />
    </section>
  );
}
