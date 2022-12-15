import * as Yup from 'yup';

const transactionsSchema = Yup.object().shape({
  category: Yup.string(),
  amount: Yup.number()
    .positive('Amount cannot be negative')
    .required('Amount is required')
    .max(1000000, 'Amount cannot be more than 1000000'),
  comment: Yup.string()
    .matches(
      /^[aA-zZ\sА-ЩЬЮЯҐЄІЇа-щьюяґєії.,']+$/,
      'Only alphabets are allowed for this field'
    )
    .max(100, 'A maximum of 100 characters can be added'),
});

export default transactionsSchema;
