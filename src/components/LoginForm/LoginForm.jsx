import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Button from '../Button/Button';
import TextField from '../TextField/TextField';
import LogoWallet from '../LogoWallet/LogoWallet';

import style from './loginForm.module.scss';

import emailIcon from '../../assets/images/Email-min.svg';
import passwordIcon from '../../assets/images/Password-min.svg';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('E-mail is invalid').required('E-mail is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const handleSubmit = (value, { resetForm }) => {
    const emailToLowerCase = value.email.toLowerCase();
    console.log(emailToLowerCase);
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
        <Form>
          <TextField
            type="email"
            name="email"
            placeholder="E-mail"
            svg={emailIcon}
          />
          <TextField
            style={{ marginBottom: '42px' }}
            type="password"
            name="password"
            placeholder="Password"
            svg={passwordIcon}
          />

          <Button text="Log in" />
          <Button text="Register" />
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
