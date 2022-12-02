import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import LogoWallet from '../LogoWallet/LogoWallet';
import style from './RegistrationForm.module.scss';

// import emailIcon from '../../assets/images/Email-min.svg';
// import passwordIcon from '../../assets/images/Password-min.svg';
// import nameIcon from '../../assets/images/NameSvg-min.svg';

const initialValues = {
  email: '',
  password: '',
  confirmPass: '',
  name: '',
};

const schema = Yup.object().shape({
  email: Yup.string()
    .min(10, 'E-mail must contain at least 10 characters')
    .max(63)
    .email('E-mail is invalid')
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .max(16, 'Password must contain 16 characters or less')
    .required('Password is required'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
  name: Yup.string()
    .min(1, 'Name must contain at least 1 character')
    .max(12, 'Name must contain 12 characters or less')
    .required('Name is required'),
});

const RegistrationForm = () => {
  const handleSubmit = (value, { resetForm }) => {
    resetForm();
    console.log(value);
  };

  return (
    <div className={style.container}>
      <LogoWallet />
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <TextField
            type="email"
            name="email"
            placeholder="E-mail"
            // svg={emailIcon}
          />
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            // svg={passwordIcon}
          />
          <TextField
            type="password"
            name="confirmPass"
            placeholder="Confirm password"
            // svg={passwordIcon}
          />
          <TextField
            type="text"
            name="name"
            placeholder="First name"
            // svg={nameIcon}
          />

          <Button text="Register" />
          <Button text="Log in" />
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
