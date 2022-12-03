import { useField, ErrorMessage, Field } from 'formik';
import PasswordStrengthIndicator from '../PasswordStrengthIndicator/PasswordStrengthIndicator';
import style from './textField.module.scss';

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
      </div>
      {field.name === 'password' && (
        <PasswordStrengthIndicator password={field.value} />
      )}
      <ErrorMessage component="div" name={field.name} className={style.error} />
    </div>
  );
};

export default TextField;
