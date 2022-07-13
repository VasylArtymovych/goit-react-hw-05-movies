import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { searchMovie } from 'components/ServerAPI/ServerApi';

const validationSchema = Yup.object().shape({
  search: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (value, { resetForm }) => {
    const { search } = value;
    onSubmit(search);
    resetForm();
  };
  return (
    <>
      <Formik
        initialValues={{ search: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <Field type="text" name="search" placeholder="search name" />
          <button type="submit">search</button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchForm;
