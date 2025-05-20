import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import styles from './Testimonials.module.css';
import { testimonials } from '@public/dummyData';
import Text from '@src/Components/Text';
import Title from '@src/Components/Title';
import SectionHeader from '@src/Components/SectionHeader';
import { useReSize } from '@src/hooks/useResize';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const TestimonialCarousel = () => {
  const [width] = useReSize();
  const { t } = useTranslation('testimonial');
  const [currentSlide, setCurrentSlide] = useState(2);

  const slidesPerView =
    width < 1140 && width > 810 ? 3 : width < 810 && width > 500 ? 2 : width < 500 ? 1 : 4;
  return (
    <div>
      <Swiper
        spaceBetween={180}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
        onSwiper={(swiper) => setCurrentSlide(swiper.realIndex)}>
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.id}>
            <div
              className={styles.testimonial}
              style={{
                transform: `scale(${index === currentSlide ? 1.2 : 1})`,
                transition: 'transform 0.3s'
              }}>
              <div className={styles.testimonial_image_container}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  blurDataURL={testimonial.imageSource.blurDataURL}
                  src={testimonial.imageSource.src}
                  alt={testimonial.imageDescription}
                />
              </div>
              <div>
                <Title
                  size="small"
                  alignTitle="center"
                  color="white"
                  styles={styles.testimonial_title}>
                  {t(`testimonial_list.${testimonial.id}.username`)}
                </Title>
                <Text alignText="center" color="white" size="small">
                  {t(`testimonial_list.${testimonial.id}.comment`)}
                </Text>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const Testimonial = () => {
  const { t } = useTranslation('testimonial');
  return (
    <section id="feedback">
      <div className={styles.testimonial_container}>
        <SectionHeader
          width="small"
          color="black"
          headerTitle={t('testimonial_title')}
          headerDescription={t('testimonial_description')}
        />

        <TestimonialCarousel />
      </div>
    </section>
  );
};

export default Testimonial;
