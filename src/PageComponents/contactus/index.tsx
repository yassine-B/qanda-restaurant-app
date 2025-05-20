import React from 'react';
import { useTranslation } from 'next-i18next';
import Styles from './Contact.module.css';
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  MobileHomeIcon,
  PhoneIcon,
  TwitterIcon,
  YoutubeIcon
} from '@public/dummyData/Icons';

import FeedbackForm from './FeedbackForm';

import Text from '@src/Components/Text';
import Title from '@src/Components/Title';
import Wrapper from '@src/Components/Wrapper';
import SectionHeader from '@src/Components/SectionHeader';

const RestaurantInformation = () => {
  const { t } = useTranslation('contact');
  return (
    <div className={Styles.contact_information_container}>
      <Title alignTitle="center" size="small" styles={Styles.contact_title} color="orangered">
        {t('contact.information_title')}
      </Title>

      <div className={Styles.contact_information_group}>
        <MobileHomeIcon />
        <Text color="white">Turcotte Corner,Littlebury , Hawaii, 37040</Text>
      </div>

      <div className={Styles.contact_information_group}>
        <EmailIcon />
        <Text color="white" size="medium">
          info@qanda_restaurant.com
        </Text>
      </div>

      <div
        className={`${Styles.contact_information_group} ${Styles.contact_information_social_icons}`}>
        <div className={Styles.contact_information_social_icons}>
          <PhoneIcon />
          <Text color="white">+1 (555) 500-1020</Text>
        </div>
        <div className={Styles.contact_information_social_icons}>
          <PhoneIcon />
          <Text color="white">+1 (555) 700-3040</Text>
        </div>
      </div>
      <div className={Styles.contact_information_group}>
        <div className={Styles.contact_information_social_icons}>
          <FacebookIcon />
          <InstagramIcon />
          <YoutubeIcon />
          <TwitterIcon />
        </div>
      </div>
    </div>
  );
};
export default function Contact() {
  const { t } = useTranslation('contact');
  return (
    <section id="contact">
      <Wrapper>
        <SectionHeader
          headerTitle={t('contact.title')}
          headerDescription={t('contact.description')}
        />
        <div className={Styles.contact_container}>
          <RestaurantInformation />
          <div className={Styles.contact_line_separator}></div>
          <div className={Styles.contact_form}>
            <Title alignTitle="center" size="small" styles={Styles.contact_title} color="orangered">
              {t('contact.form_title')}
            </Title>
            <FeedbackForm />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
