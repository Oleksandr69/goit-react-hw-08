import React from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import css from './RegistrationForm.module.css';
import { registerThunk } from '../../redux/auth/operations';
import * as Yup from "yup";
import { useId } from "react";

const RegistrationForm = () => {
  const dispatch = useDispatch();

    const initialValues = {
        name: '',
        email: '',
        password: '',
  }
    const nameFieldId = useId();
    const emailFieldId = useId();
    const passwordFieldId = useId();
  
  const FeedbackSchema = Yup.object().shape({
        name: Yup.string().trim().min(3, "Too short!").max(20, "Too Long!").required("Required!"),
        email: Yup.string().trim().min(7, "Too short!").max(50, "Too Long!").required("Required!"),
        password: Yup.string().min(7, "Too short!").max(20, "Too Long!").required("Required!"),
    });
    const handleSubmit = (value, options) => {
      // console.log(value);
      dispatch(registerThunk(value));
      options.resetForm();
    }
  return (
<>
    <div>
      <h2>Register now!</h2>
    </div>
    <div>
      <div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form>
              <fieldset className={css.fieldset}>
                <div className={css.item}>
          <label>Name</label>
                  <Field name='name' type="name" id={nameFieldId} className={css.input} placeholder="Name" />
                   <ErrorMessage name="name" component="span" className={css.message} />
                </div>
                <div className={css.item}>
          <label>Email</label>
                  <Field name='email' type="email" id={emailFieldId} className={css.input} placeholder="Email" />
                   <ErrorMessage name="email" component="span" className={css.message} />
                </div>
                <div className={css.item}>
          <label>Password</label>
                  <Field name='password' type="password" id={passwordFieldId} className={css.input} placeholder="Password" />
                   <ErrorMessage name="password" component="span" className={css.message} />
                </div>
          {/* <Link to='/login'>Go to Login</Link> */}
          <button type='submit'>Register</button>
        </fieldset>
        </Form>
        </Formik>
        {/* <Link to='/'>Go to home</Link> */}
      </div>
    </div>
</>
  )
}

export default RegistrationForm;
