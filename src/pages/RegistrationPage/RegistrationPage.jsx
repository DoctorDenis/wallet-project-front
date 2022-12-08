import { Navigate } from 'react-router-dom';
import { useAuth } from '../../shared/hooks/useAuth';

import Container from '../../components/Container/Container';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import style from './registrationPage.module.scss';

import registrationImage from '../../assets/images/registerImg.svg';
import ellipsePink from '../../assets/images/EllipsePink-min.svg';
import ellipsePurple from '../../assets/images/EllipsePurple-min.svg';

const RegistrationPage = () => {
  const isLoggedIn = useAuth();

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/home" />
      ) : (
        <section className={style.section}>
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
                  className={style.img}
                  src={registrationImage}
                  alt="Finance App"
                />
                <p className={style.text}>Finance App</p>
              </div>

              <RegistrationForm />
            </div>
          </Container>
        </section>
      )}
    </>
  );
};

export default RegistrationPage;
