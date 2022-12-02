import { useField, ErrorMessage } from 'formik';
import style from './textField.module.scss';

const TextField = ({ ...props }) => {
  const [field, meta] = useField(props);
  // field це значення полів форми
  // meta обєкт який зберігає додаткові методи

  return (
    <div className={style.container}>
      <input
        className={`${style.input} ${
          meta.touched && meta.error && style.isInvalid
        }`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className={style.error} />
    </div>
  );
};

export default TextField;
