import React from 'react';
import { useTranslation } from 'next-i18next';
import { offersList } from '@public/dummyData';

import Wrapper from '@src/Components/Wrapper';
import { CardGrid } from '@src/Components/CardGrid';
import SectionHeader from '@src/Components/SectionHeader';

export default function SpecialOffers() {
  const { t } = useTranslation('offers');
  return (
    <>
      <section id="special">
        <Wrapper>
          <SectionHeader
            headerTitle={t('offers.title')}
            headerDescription={t('offers.description')}
          />
          <CardGrid data={offersList} listName="offers" />
        </Wrapper>
      </section>
    </>
  );
}
