import style from './button.module.scss';
import { useFormik } from 'formik';

const Button = ({ text }) => {
  const { isSubmitting } = useFormik({});
  // isSubmitting це стан відправлення форми, використовуємо для того, 
  // щоб не було можливості відправити данні до того, як вони будуть корректно введені 

  return (
    <button className={style.btn} type="submit" disabled={isSubmitting}>
      {text}
    </button>
  );
};

export default Button;
