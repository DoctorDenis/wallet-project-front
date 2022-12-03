import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import LogoWallet from '../LogoWallet/LogoWallet';

import style from './RegistrationForm.module.scss';

import emailIcon from '../../assets/images/Email-min.svg';
import passwordIcon from '../../assets/images/Password-min.svg';
import nameIcon from '../../assets/images/NameSvg-min.svg';

const initialValues = {
  email: '',
  password: '',
  confirmPass: '',
  name: '',
};

// const emailSymbol = /^[A-Za-z0-9.]{1}[A-Za-z0-9.-]{1,}@[A-Za-z0-9]+.\w{2,3}$/;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    // .matches(emailSymbol, 'Must be at least 2 characters before the "@" symbol')
    .email('E-mail is invalid')
    .min(10, 'E-mail must contain at least 10 characters')
    .max(63)
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .max(16, 'Password must contain 16 characters or less')
    .required('Password is required'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
  name: Yup.string()
    .min(2, 'Name must contain at least 2 character')
    .max(12, 'Name must contain 12 characters or less')
    .required('Name is required'),
});

const RegistrationForm = () => {
  const handleSubmit = (value, { resetForm }) => {
    const emailToLowerCase = value.email.toLowerCase();
    console.log(emailToLowerCase);
    console.log(initialValues.password);
    resetForm();
  };

  return (
    <div className={style.container}>
      <LogoWallet />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={style.form}>
          <TextField
            type="email"
            name="email"
            placeholder="E-mail"
            svg={emailIcon}
          />
          <TextField
            type="password"
            name="password"
            placeholder="Password"
            svg={passwordIcon}
          />
          <TextField
            type="password"
            name="confirmPass"
            placeholder="Confirm password"
            svg={passwordIcon}
          />

          <TextField
            type="text"
            name="name"
            placeholder="First name"
            svg={nameIcon}
          />

          <Button text="Register" />
          <Button text="Log in" />
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
