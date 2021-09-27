import React from 'react';
import styles from './CreateHeroModal.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { schemaValidateHero } from '../../../helpers/validateHero';
import { useDispatch } from 'react-redux';
import { addHero } from '../../../redux/heroes/heroes-operations';

const initialState = {
  nickname: '',
  real_name: '',
  origin_description: '',
  superpower: '',
  catch_phrase: '',
  image: '',
};

const CreateHeroModal = ({ setisModalOpen }) => {
  const dispatch = useDispatch();

  const onHandleSubmit = values => {
    // let formData = new FormData();
    // formData.append('file', values.image);

    dispatch(addHero(values));
    setisModalOpen(false);
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <Formik
          initialValues={initialState}
          validationSchema={schemaValidateHero}
          onSubmit={async (values, actions) => {
            onHandleSubmit(values);
            actions.resetForm({ initialState });
          }}
        >
          {({ values }) => (
            <Form>
              <div className={styles.form}>
                <Field
                  className={styles.input}
                  autoComplete="off"
                  type="text"
                  placeholder="Nickname"
                  value={values.nickname}
                  name="nickname"
                />
                <ErrorMessage
                  name="nickname"
                  className={styles.formError_nickname}
                  component="div"
                />
                <Field
                  className={styles.input}
                  autoComplete="off"
                  type="text"
                  placeholder="Real name"
                  value={values.real_name}
                  name="real_name"
                />
                <ErrorMessage
                  name="real_name"
                  className={styles.formError_real_name}
                  component="div"
                />
                <Field
                  className={styles.input}
                  autoComplete="off"
                  type="text"
                  placeholder="Origin description"
                  value={values.origin_description}
                  name="origin_description"
                />
                <ErrorMessage
                  name="origin_description"
                  className={styles.formError_origin_description}
                  component="div"
                />
                <Field
                  className={styles.input}
                  autoComplete="off"
                  type="text"
                  placeholder="Superpower"
                  value={values.superpower}
                  name="superpower"
                />
                <ErrorMessage
                  name="superpower"
                  className={styles.formError_superpower}
                  component="div"
                />
                <Field
                  className={styles.input}
                  autoComplete="off"
                  type="text"
                  placeholder="Catch phrase"
                  value={values.catch_phrase}
                  name="catch_phrase"
                />
                <ErrorMessage
                  name="catch_phrase"
                  className={styles.formError_catch_phrase}
                  component="div"
                />
                <Field
                  className={styles.fileInput}
                  autoComplete="off"
                  type="file"
                  placeholder="Image"
                  value={values.image}
                  name="image"
                />
                <ErrorMessage
                  name="image"
                  className={styles.formError_image}
                  component="div"
                />
                <div className={styles.btn_box}>
                  <button type="submit" className={styles.btnAddForm}>
                    Create
                  </button>
                  <button
                    type="button"
                    className={styles.btnAddForm}
                    onClick={() => setisModalOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateHeroModal;
