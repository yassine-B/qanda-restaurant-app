import * as Yup from 'yup';

export const reservationSchema = Yup.object().shape({
  fullname: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  number_of_persons: Yup.string().required('Required'),
  date: Yup.string().required('required'),
  from: Yup.string().required('Required'),
  to: Yup.string().required('Required')
});
