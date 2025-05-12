import { useId } from "react";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from  './ContactForm.module.css'
import { useDispatch } from "react-redux";
import { addContact } from '../../redux/contacts/operations';

const ContactForm = () => {

  const dispatch = useDispatch();

  const nameFieldId = useId();
  const telFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const FeedbackSchema = Yup.object().shape({
  name: Yup.string().trim().min(2, "Too short!").max(50, "Too Long!").required("Required!"),
  number: Yup.string().min(7, "Too short!").max(10, "Too Long!").required("Required!"),
});

  const handleSubmit = (value, actions) => {

    dispatch(addContact({
      name: value.name,
      number: value.number,
    
    }))
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form>
        <div className={css.formik}>
        <div className={css.field}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} className={ css.input} />
          <ErrorMessage name="name" component="span" className={css.message} />
        </div>

        <div className={css.field}>
          <label htmlFor={telFieldId}>Number</label>
          <Field type='text' name="number" id={telFieldId} className={ css.input} />
          <ErrorMessage name="number" component="span" className={css.message} />
        </div>

          <button type="submit" className={css.button}>Add contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;