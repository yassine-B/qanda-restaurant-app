import Image, { type StaticImageData } from 'next/image';
import { useTranslation } from 'next-i18next';
import Styles from './CardGrid.module.css';

import Text from '../Text';
import Title from '../Title';
import Button from '../Button';

interface dataProps {
  id: string;
  imageSource: StaticImageData;
  imageDescription: string;
}
export const CardGrid = ({ data, listName }: { data: dataProps[]; listName: string }) => {
  const { t } = useTranslation(listName);
  const result = data.map((dataItem) => {
    const { id, imageSource, imageDescription } = dataItem;

    return (
      <div key={id} className={Styles.card_item}>
        <div className={Styles.card_item_image}>
          <Image
            objectFit="cover"
            layout="fill"
            placeholder="blur"
            blurDataURL={imageSource.blurDataURL}
            src={imageSource.src}
            alt={imageDescription}
          />
        </div>
        <div className={Styles.card_item_description}>
          <Title color="black" size="small">
            {t(`${listName}.${listName}_list.${id}.title`)}
          </Title>
          <Text color="black" alignText="center">
            {t(`${listName}.${listName}_list.${id}.description`)}
          </Text>

          <Button>{t(`${listName}.${listName}_list.${id}.button`)}</Button>
        </div>
      </div>
    );
  });
  return <div className={Styles.card_container}>{result}</div>;
};
