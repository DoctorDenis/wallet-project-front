import { useFormik } from 'formik';
import style from './buttonActive.module.scss';

const ButtonActive = ({ text }) => {
  const { isSubmitting } = useFormik({});

  return (
    <button
      className={style.btn_active}
      type="submit"
      disabled={isSubmitting}
      
    >
      {text}
    </button>
  );
};

export default ButtonActive;
