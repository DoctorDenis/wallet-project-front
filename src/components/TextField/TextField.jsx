import { useField, ErrorMessage } from 'formik';
import style from './textField.module.scss';

const TextField = ({ svg, ...props }) => {
  const [field, meta] = useField(props);
  // field це значення полів форми
  // meta обєкт який зберігає додаткові методи

  return (
    <div className={style.container}>
      {/* <img src={svg} alt="icon" className={style.icon} width="24" height="24" /> */}
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
