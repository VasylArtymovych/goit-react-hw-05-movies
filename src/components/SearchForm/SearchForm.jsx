import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';
import { StyledForm, StyledInput, Button } from './SearchForm.styled';

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
        <StyledForm>
          <StyledInput type="text" name="search" placeholder="search name" />
          <Button type="submit">
            <BiSearch size={22} color="white" />
          </Button>
        </StyledForm>
      </Formik>
    </>
  );
};

export default SearchForm;

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
