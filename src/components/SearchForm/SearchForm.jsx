import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

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

// styled-components:
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledInput = styled(Field)`
  width: 320px;
  min-height: 25px;
  font-size: 18px;
  border: none;
  outline: none;
  padding-left: ${p => p.theme.space[3]}px;
  background: rgb(216, 203, 149);
`;

const Button = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: 0;
  background: ${p => p.theme.colors.background};
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
    background: ${p => p.theme.colors.accent};
  }
`;
