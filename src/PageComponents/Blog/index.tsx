import React from 'react';
import { useTranslation } from 'next-i18next';
import { blogsList } from '@public/dummyData';

import Wrapper from '@src/Components/Wrapper';
import { CardGrid } from '@src/Components/CardGrid';
import SectionHeader from '@src/Components/SectionHeader';

export default function Blogs() {
  const { t } = useTranslation('blogs');
  return (
    <section id="blogs">
      <Wrapper>
        <SectionHeader headerTitle={t('blogs.title')} headerDescription={t('blogs.description')} />
        <CardGrid data={blogsList} listName="blogs" />
      </Wrapper>
    </section>
  );
}
