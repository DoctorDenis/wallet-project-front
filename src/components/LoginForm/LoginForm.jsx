import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { login } from '../../redux/auth/auth-operations';

import Button from '../Button/Button';
import ButtonActive from '../ButtonActive/ButtonActive';
import TextField from '../TextField/TextField';
import LogoWallet from '../LogoWallet/LogoWallet';
// import axios from 'axios';
// import {
//   // useState,
//   useEffect,
// } from 'react';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [currency, setCurrency] = useState([]);

  // useEffect(() => {
  //   const currencyObj = JSON.parse(localStorage.getItem('currency'));
  //   if (!currencyObj) {
  //     axios
  //       .get(`https://wallet-project.cyclic.app/currency`)
  //       .then(res => {
  //         localStorage.setItem('currency', JSON.stringify(res.data));
  //         // setCurrency(res.data);
  //       })
  //       .catch(err => {
  //         throw err;
  //       });
  //   } else {
  //     // setCurrency(currencyObj);
  //   }
  //   // eslint-disable-next-line
  // }, []);

  const handleSubmit = ({ email, password }, { resetForm }) => {
    // const emailToLowerCase = email.toLowerCase();
    // console.log(emailToLowerCase);
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

          <ButtonActive text="Log in" />
          <Button text="Register" onClick={changeRoute} />
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
