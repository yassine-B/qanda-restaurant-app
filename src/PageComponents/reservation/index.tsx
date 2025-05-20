import React from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'next-i18next';
import Styles from './Reservation.module.css';

import { reservationSchema } from './ReservationSchema';

import Title from '@src/Components/Title';
import Modal from '@src/Components/Modal';
import Button from '@src/Components/Button';
import Wrapper from '@src/Components/Wrapper';
import SectionHeader from '@src/Components/SectionHeader';

import { useToggle } from '@src/hooks/useToggle';

const formInitialState = {
  fullname: '',
  email: '',
  phone: '',
  number_of_persons: '',
  date: '',
  from: '',
  to: ''
};

function ReservationModal({ isOpen, onClose, onReset, values }: any) {
  const { t } = useTranslation('reservation');
  const { fullname, email, phone, number_of_persons, date, from, to } = values;

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <Title size="medium" alignTitle="center" styles={Styles.reservation_modal_title}>
          {t('reservation.modal_title')}
        </Title>
        <div className={Styles.reservation_modal_body}>
          <ul>
            <li>FullName : {fullname}</li>
            <li>E-Mail : {email}</li>
            <li>Phone : {phone}</li>
            <li>Persons : {number_of_persons}</li>
            <li>Date : {date}</li>
            <li>
              {t('reservation.modal_time.from')} : {from} {t('reservation.modal_time.to')} : {to}
            </li>
          </ul>
        </div>
        <div className={Styles.reservation_modal_footer}>
          <Button
            styles="global-btn btn-color-primary"
            onClick={() => {
              onReset();
              onClose();
            }}>
            {t('reservation.modal_submit_button')}
          </Button>
          <Button styles="global-btn btn-color-secondary" onClick={onClose}>
            {t('reservation.modal_cancel_button')}
          </Button>
        </div>
      </Modal>
    </>
  );
}

const FormInput = ({
  type = 'text',
  name,
  placeholder,
  value,
  onChange,
  onBlur,
  touched,
  error
}: any) => {
  const { t } = useTranslation('reservation');
  return (
    <div>
      <input
        className={Styles.reservation_input}
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {touched && error && (
        <p className={Styles.reservation_error_message}>
          {t(`reservation.form.${name}.error_message`)}
        </p>
      )}
    </div>
  );
};
const FormButtonGroup = () => {
  const { t } = useTranslation('reservation');
  return (
    <div className={Styles.reservation_button_group}>
      <Button type="submit" bgColor="primary">
        {t('reservation.form_submit_button')}
      </Button>
      <div className={Styles.reservation_button_separator}> {t('reservation.text_separator')}</div>
      <Button type="button" bgColor="secondary">
        {t('reservation.form_cancel_button')}
      </Button>
    </div>
  );
};
export default function Reservation() {
  const { t } = useTranslation('reservation');

  const { isOpen, onOpen, onClose } = useToggle();

  const onSubmit = () => {
    if (isValid) {
      onOpen();
    }
  };
  const { values, touched, errors, handleBlur, handleChange, resetForm, handleSubmit, isValid } =
    useFormik({
      initialValues: formInitialState,
      onSubmit: onSubmit,
      validationSchema: reservationSchema
    });

  return (
    <>
      <ReservationModal values={values} isOpen={isOpen} onReset={resetForm} onClose={onClose} />

      <section id="reservation">
        <Wrapper>
          <SectionHeader
            headerTitle={t('reservation.title')}
            headerDescription={t('reservation.description')}
          />

          <form className={Styles.reservation_form} onSubmit={handleSubmit}>
            <div className={Styles.reservation_form_fields}>
              <div className={Styles.reservation_input_group}>
                <FormInput
                  name="fullname"
                  value={values.fullname}
                  placeholder={t('reservation.form.fullname.placeholder')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.fullname}
                  error={errors.fullname}
                />
                <FormInput
                  name="phone"
                  value={values.phone}
                  placeholder={t('reservation.form.phone.placeholder')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.phone}
                  error={errors.phone}
                />

                <div className="">
                  <FormInput
                    type="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.date}
                    error={errors.date}
                  />
                </div>
              </div>

              <div className={Styles.reservation_input_group}>
                <FormInput
                  name="email"
                  value={values.email}
                  placeholder={t('reservation.form.email.placeholder')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.email}
                  error={errors.email}
                />
                <FormInput
                  name="number_of_persons"
                  type="number"
                  value={values.number_of_persons}
                  placeholder={t('reservation.form.number_of_persons.placeholder')}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  touched={touched.number_of_persons}
                  error={errors.number_of_persons}
                />

                <div className={Styles.reservation_time_input_group}>
                  <FormInput
                    name="from"
                    type="number"
                    value={values.from}
                    placeholder={t('reservation.form.from.placeholder')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.from}
                    error={errors.from}
                  />
                  <FormInput
                    name="to"
                    type="number"
                    value={values.to}
                    placeholder={t('reservation.form.to.placeholder')}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    touched={touched.to}
                    error={errors.to}
                  />
                </div>
              </div>
            </div>
            <FormButtonGroup />
          </form>
        </Wrapper>
      </section>
    </>
  );
}
