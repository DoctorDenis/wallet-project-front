import { Navigate } from 'react-router-dom';
import { useAuth } from '../../shared/hooks/useAuth';

import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import style from '../RegistrationPage/registrationPage.module.scss';
import css from './loginPage.module.scss';

import loginImage from '../../assets/images/loginImg.svg';
import ellipsePink from '../../assets/images/EllipsePink-min.svg';
import ellipsePurple from '../../assets/images/EllipsePurple-min.svg';

const LoginPage = () => {
  const isLoggedIn = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/home" />
      ) : (
        <section className={css.sectionLogin}>
          <img className={style.ellipseTop} src={ellipsePink} alt="Ellipse" />
          <img
            className={style.ellipseBottom}
            src={ellipsePurple}
            alt="Ellipse"
          />
          <Container>
            <div className={style.container}>
              <div className={style.bgContainer}>
                <img
                  className={css.imgLogin}
                  src={loginImage}
                  alt="Finance App"
                />
                <p className={style.text}>Finance App</p>
              </div>

              <LoginForm />
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default LoginPage;
