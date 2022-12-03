// import Container from '../../components/Container/Container';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import style from './registrationPage.module.scss';

import registrationImage from '../../assets/images/registerImg.svg';

const RegistrationPage = () => {
  return (
    <section className={style.section}>
      {/* <Container> */}
      <div className={style.bgContainer}>
        <img className={style.img} src={registrationImage} alt="Finance App" />
        <p className={style.text}>Finance App</p>
      </div>

      <RegistrationForm />
      {/* </Container> */}
    </section>
  );
};

export default RegistrationPage;
