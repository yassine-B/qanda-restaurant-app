import React from 'react';
import { useTranslation } from 'next-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Styles from './FeedbackForm.module.css';
import Button from '@src/Components/Button';
import Text from '@src/Components/Text';

const FeedbackForm = () => {
  const { t } = useTranslation('contact');

  const feedbackSchema = Yup.object().shape({
    name: Yup.string().required(t('contact.feedback_form.fullname.error_message')),
    email: Yup.string()
      .email(t('contact.feedback_form.email.error_message'))
      .required(t('contact.feedback_form.email.error_message')),
    phone: Yup.string().required(t('contact.feedback_form.phone.error_message')),
    message: Yup.string().required(t('contact.feedback_form.message.error_message'))
  });

  const onSubmit = (values: any) => {
    if (isValid) {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
      resetForm();
    }
  };

  const { values, touched, errors, handleBlur, handleChange, resetForm, handleSubmit, isValid } =
    useFormik({
      initialValues: { name: '', email: '', phone: '', message: '' },
      onSubmit: onSubmit,
      validationSchema: feedbackSchema
    });

  return (
    <form onSubmit={handleSubmit} className={Styles.feedback_form}>
      <div>
        <input
          className={Styles.feedback_form_input}
          type="text"
          name="name"
          value={values.name}
          placeholder={t('contact.feedback_form.fullname.placeholder')}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.name && errors.name && (
          <Text color="error">{t('contact.feedback_form.fullname.error_message')}</Text>
        )}
      </div>
      <div>
        <input
          className={Styles.feedback_form_input}
          name="email"
          type="email"
          value={values.email}
          placeholder={t('contact.feedback_form.email.placeholder')}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.email && errors.email && (
          <Text color="error">{t('contact.feedback_form.email.error_message')}</Text>
        )}
      </div>
      <div>
        <input
          className={Styles.feedback_form_input}
          name="phone"
          type="phone"
          value={values.phone}
          placeholder={t('contact.feedback_form.phone.placeholder')}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.phone && errors.phone && (
          <Text color="error">{t('contact.feedback_form.phone.error_message')}</Text>
        )}
      </div>
      <div>
        <textarea
          className={Styles.feedback_form_input}
          name="message"
          rows={6}
          placeholder={t('contact.feedback_form.message.placeholder')}
          value={values.message}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.message && errors.message && (
          <Text color="error">{t('contact.feedback_form.message.error_message')}</Text>
        )}
      </div>
      <Button type="submit">{t('contact.form_button')}</Button>
    </form>
  );
};
export default FeedbackForm;
