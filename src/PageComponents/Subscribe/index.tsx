import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'next-i18next';
import Styles from './Subscribe.module.css';

import Button from '@src/Components/Button';
import SectionHeader from '@src/Components/SectionHeader';

export default function Subscribe() {
  const { t } = useTranslation('common');

  const onSubmit = (values: any) => {
    if (isValid) {
      console.log(values);
      resetForm();
    }
  };
  const subscribeSchema = Yup.object().shape({
    email: Yup.string().email(t('newsletter.error_message')).required(t('newsletter.error_message'))
  });
  const { values, touched, errors, handleBlur, handleChange, resetForm, handleSubmit, isValid } =
    useFormik({
      initialValues: { email: '' },
      onSubmit: onSubmit,
      validationSchema: subscribeSchema
    });

  return (
    <div className={`shared_bg ${Styles.subscribe_hero}`}>
      <SectionHeader
        width="small"
        color="white"
        headerTitle={t('newsletter.title')}
        headerDescription={t('newsletter.description')}
      />
      <div>
        <form className={Styles.subscribe_form} onSubmit={handleSubmit}>
          <input
            className={Styles.subscribe_form_input}
            name="email"
            type="email"
            value={values.email}
            placeholder={t('newsletter.placeholder')}
            onChange={handleChange}
            onBlur={handleBlur}
          />

          <Button type="submit">{t('newsletter.button')}</Button>
        </form>
        {(touched.email || errors.email) && (
          <p className={Styles.subscribe_error_message}>{errors.email}</p>
        )}
      </div>
    </div>
  );
}
