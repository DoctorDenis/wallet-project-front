import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('E-mail is invalid').required('E-mail is required'),
  password: Yup.string().required('Password is required'),
});

export default loginSchema;
