import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { register } from '../../redux/auth/auth-operations';

import Button from '../Button/Button';
import ButtonActive from '../ButtonActive/ButtonActive';
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

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is invalid')
    .min(10, 'E-mail must contain at least 10 characters')
    .max(63)
    .matches(/^.{1}[A-Za-z0-9._-]{1,}@[A-Za-z0-9]+.\w{2,3}$/, {
      message: 'Name section of email must have at least 2 characters',
      excludeEmptyString: true,
    })
    .matches(/^[A-Za-z0-9.]{1}[A-Za-z0-9._-]{1,}@[A-Za-z0-9]+.\w{2,3}$/, {
      message: 'Email must not start with "-"',
      excludeEmptyString: true,
    })
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .max(16, 'Password must contain 16 characters or less')
    .required('Password is required'),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
  name: Yup.string()
    .min(1)
    .max(12, 'Name must contain 12 characters or less')
    .matches(
      /^[ЙЦУКНГШЩЗХЇЄЖДЛОРПАВІФЮБЬТИМСЧЯйцукенгшщзхїєждлорпавіфячсмитьбю A-Za-z-]+$/,
      {
        message:
          'Name must contain only latin, cyrillic (ukrainian), space or hyphen',
      }
    )
    .required('Name is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({ email, password, name }, { resetForm }) => {
    // const emailToLowerCase = email.toLowerCase();
    dispatch(register({ email, password, name }));
    resetForm();
  };

  const changeRoute = () => {
    const path = '/login';
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

          <ButtonActive text="Register" />
          <Button text="Log in" onClick={changeRoute} />
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
