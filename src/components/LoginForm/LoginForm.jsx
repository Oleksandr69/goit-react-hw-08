import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logInThunk } from '../../redux/auth/operations';
import css from './LoginForm.module.css'
import * as Yup from "yup";
import { useId } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();
  
  const initialValues = {
    email: '',
    password: '',
  }

    const FeedbackSchema = Yup.object().shape({
      email: Yup.string().trim().min(7, "Too short!").max(50, "Too Long!").required("Required!"),
      password: Yup.string().min(7, "Too short!").max(20, "Too Long!").required("Required!"),
  });

  const handleSubmit = (value, options) => {
    dispatch(logInThunk(value));
    console.log(value);
    options.resetForm();

    }
  return (
  <>
    <div>
      <h2>Login now!</h2>
    </div>
    <div>
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form>
              <fieldset className={css.fieldset}>
                <div className={css.item}>
          <label htmlFor={emailFieldId}>Email</label>
            <Field name='email' type="email" id={emailFieldId} className={css.input} placeholder="Email" />
                <ErrorMessage name="email" component="span" className={css.message} />
                </div>
                <div className={css.item}>
          <label htmlFor={passwordFieldId}>Password</label>
            <Field name='password' type="password" id={passwordFieldId} className={css.input} placeholder="Password" />
                  <ErrorMessage name="password" component="span" className={css.message} />
                  </div>
          {/* <Link to='/register'>Go to Register</Link> */}
          <button type='submit'>Login</button>
        </fieldset>
        </Form>
        </Formik>
        {/* <Link to='/'>Go to home</Link> */}
      </div>
    </div>
  </>
  )
}

export default LoginForm;
