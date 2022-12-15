import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../redux/auth/auth-operations';
import loginSchema from '../../shared/schemas/loginSchema';

import Button from '../Button/Button';
import ButtonActive from '../ButtonActive/ButtonActive';
import TextField from '../TextField/TextField';
import LogoWallet from '../LogoWallet/LogoWallet';

import style from './loginForm.module.scss';

import emailIcon from '../../assets/images/Email-min.svg';
import passwordIcon from '../../assets/images/Password-min.svg';

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    dispatch(login({ email, password }));
    resetForm();
  };

  const changeRoute = () => {
    const path = '/register';
    navigate(path);
  };

  return (
    <div className={style.container}>
      <LogoWallet />
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
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

          <ButtonActive text="Log in" />
          <Button text="Register" onClick={changeRoute} />
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
