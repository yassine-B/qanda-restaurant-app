import React from 'react';
import { useTranslation } from 'next-i18next';
import Styles from './ResItems.module.css';
import Title from '@src/Components/Title';

const restaurantItemsList = [
  { category: 'breakfast', count: '25' },
  { category: 'lunch', count: '23' },
  { category: 'dinner', count: '30' },
  { category: 'coffee', count: '10' }
];
const RestaurantItems = () => {
  const { t } = useTranslation('common');
  const result = restaurantItemsList.map((item) => {
    return (
      <div key={item.category} className={Styles.restaurant_items}>
        <span className={Styles.restaurant_items_number}>{item.count}</span>
        <Title color="black" alignTitle="center" size="medium">
          {t(`restaurant_items.${item.category}`)}
        </Title>
      </div>
    );
  });
  return <div className={`shared_bg ${Styles.restaurant_items_bg}`}>{result}</div>;
};
export default RestaurantItems;
