import { useField, ErrorMessage, Field } from 'formik';
import PasswordStrengthIndicator from '../PasswordStrengthIndicator/PasswordStrengthIndicator';
import style from './textField.module.scss';
import star from '../../assets/images/star.svg';

const TextField = ({ svg, ...props }) => {
  const [field, meta] = useField(props);
  // field це значення полів форми
  // meta обєкт який зберігає додаткові методи

  return (
    <div className={style.container}>
      <div className={style.containerInput}>
        <img src={svg} alt="icon" className={style.icon} />

        <Field
          className={`${style.input} ${
            meta.touched && meta.error && style.isInvalid
          }`}
          {...field}
          {...props}
          autoComplete="off"
        />

        <img
          src={star}
          alt="Star"
          className={`${style.iconStar} ${
            meta.touched && meta.error && style.isShowIcon
          }`}
        />
      </div>
      {field.name === 'password' && (
        <PasswordStrengthIndicator password={field.value} />
      )}
      <ErrorMessage component="div" name={field.name} className={style.error} />
    </div>
  );
};

export default TextField;
