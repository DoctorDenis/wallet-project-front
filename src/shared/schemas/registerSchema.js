import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail is invalid')
    .matches(/^[A-Za-z0-9._-]{1,}@.+$/, {
      message: 'Name section of email must not contain special symbols',
      excludeEmptyString: true,
    })
    .email('E-mail is invalid')
    .min(10, 'E-mail must contain at least 10 characters')
    .max(63)
    .matches(/^.{2,}@.+$/, {
      message: 'Name section of email must have at least 2 characters',
      excludeEmptyString: true,
    })
    // .matches(/^.+.\w{2,3}$/, {
    //   message: 'Domain section invalid',
    //   excludeEmptyString: true,
    // })
    .matches(/^[A-Za-z0-9._]{1}[A-Za-z0-9._-]{1,}@[A-Za-z0-9]+.\w+$/, {
      message: 'Email must not start with "-"',
      excludeEmptyString: true,
    })
    .matches(/^.+\.\w{2,3}$/, {
      message: 'Domain section of email must not contain 2 or 3 letters',
      excludeEmptyString: true,
    })
    .required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Password must contain at least 6 characters')
    .max(16, 'Password must contain 16 characters or less')
    .required('Password is required')
    .matches(/^[A-Za-z0-9!@#$%^&*()_+!А-Яа-я]+$/, {
      message: 'Password must not contain space sign',
      excludeEmptyString: true,
    }),
  confirmPass: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
  name: Yup.string()
    .min(1)
    .max(12, 'Name must contain 12 characters or less')
    .matches(
      /^[ЙЦУКНГШЩЗХЇЄЖДЛОРПАВІФЮБЬТИМСЧЯйцукенгшщзхїєждлорпавіфячсмитьбю A-Za-z-]+$/,
      {
        message:
          'Name must contain only latin, cyrillic (ukrainian), space or hyphen',
      }
    )
    .required('Name is required'),
});

export default registerSchema;
