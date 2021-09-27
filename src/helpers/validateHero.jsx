import * as Yup from 'yup';

const schemaValidateHero = Yup.object().shape({
  nickname: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Fill in latin letters, please!!')
    .min(2, 'Too short nickname !')
    .max(100, 'Too long nickname, no more than 100 letters!')
    .required('Nickname is required!')
    .typeError('Must be a string.'),
  real_name: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Fill in latin letters, please!!')
    .min(2, 'Too short real name!')
    .max(100, 'Too long real name, no more than 100 letters!')
    .required('Real name is required!')
    .typeError('Must be a string.'),
  origin_description: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Fill in latin letters, please!!')
    .min(2, 'Too short origin description!')
    .max(100, 'Too long origin description, no more than 100 letters!')
    .typeError('Must be a string.'),
  catch_phrase: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Fill in latin letters, please!!')
    .min(2, 'Too short catch phrase!')
    .max(100, 'Too long catch phrase, no more than 100 letters!')
    .typeError('Must be a string.'),
  superpower: Yup.string()
    .matches(/^[aA-zZ\s]+$/, 'Fill in latin letters, please!!')
    .min(2, 'Too short superpover!')
    .max(100, 'Too long superpover, no more than 100 letters!')
    .typeError('Must be a string.'),
  //   superpovers: Yup.array().of(Yup.string()),
  image: Yup.array().min(1, 'select at least 1 file').nullable(),
});

export { schemaValidateHero };
