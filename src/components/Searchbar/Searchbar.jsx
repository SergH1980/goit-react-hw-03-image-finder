import React, { Component } from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { MdSearch } from 'react-icons/md';
import { IconContext } from 'react-icons';
import {
  FormWrap,
  Form,
  Field,
  SearchButton,
  SearchButtonIcon,
  ErrorMessage,
} from './Searchbar.styled';

let schema = yup
  .object()
  .shape({ query: yup.string().min(1).max(16).required() });

const initialValues = {
  query: ``,
};

export class Searchbar extends Component {
  render() {
    const handleSubmit = (values, { resetForm }) => {
      resetForm();
      this.props.onSubmit(values.query);
    };
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormWrap>
          <Form autoComplete="off" autoFocus>
            <SearchButton type="submit">
              <SearchButtonIcon>
                <IconContext.Provider value={{ size: `2.5em` }}>
                  <div>
                    <MdSearch />
                  </div>
                </IconContext.Provider>
              </SearchButtonIcon>
            </SearchButton>

            <Field name="query" placeholder="Search images and photos" />
            <ErrorMessage name="query" component={`div`} />
          </Form>
        </FormWrap>
      </Formik>
    );
  }
}
