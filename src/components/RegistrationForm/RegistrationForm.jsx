import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { register } from '../../redux/auth/auth-operations';
import Button from '../Button/Button';
import ButtonActive from '../ButtonActive/ButtonActive';
import TextField from '../TextField/TextField';
import LogoWallet from '../LogoWallet/LogoWallet';

import registerSchema from '../../shared/schemas/registerSchema';

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

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = ({ email, password, name }, { resetForm }) => {
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
        validationSchema={registerSchema}
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
