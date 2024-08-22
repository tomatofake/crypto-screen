import React, { useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { IoClose } from "react-icons/io5";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  textarea: Yup.string()
    .min(2, 'Too Short')
    .required('Required'),
});

const Modal = ({ handleClose }) => {
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      handleClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-gray-700 bg-opacity-30 flex justify-center items-center z-50 sm:px-0 xs:px-10"
      onClick={handleOutsideClick}
    >
      <div className="bg-black p-6 rounded shadow-lg w-[400px] relative">
        <div className='flex justify-between items-center mb-3'>
          <h1 className="text-xl">Send your feedback</h1>
          <IoClose className='text-2xl cursor-pointer' onClick={handleClose} />
        </div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            textarea: '',
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            console.log(values);
            handleClose();
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex flex-col">
              <div>
                <h2 className="pb-2">Your first name</h2>
                <Field name="firstName" className="mb-2 text-black w-full" />
                {errors.firstName && touched.firstName ? (
                  <div className="text-red-600 text-sm py-1">{errors.firstName}</div>
                ) : null}
              </div>
              <div>
                <h2 className="pb-2">Your last name</h2>
                <Field name="lastName" className="mb-2 text-black w-full" />
                {errors.lastName && touched.lastName ? (
                  <div className="text-red-600 text-sm py-1">{errors.lastName}</div>
                ) : null}
              </div>
              <div>
                <h2 className="pb-2">Your email</h2>
                <Field name="email" type="email" className="mb-2 text-black w-full" />
                {errors.email && touched.email ? (
                  <div className="text-red-600 text-sm py-1">{errors.email}</div>
                ) : null}
              </div>
              <div>
                <h2 className="pb-2 ">Your message</h2>
                <Field name="textarea" as="textarea" className="sm:mb-2 xs:mb-1 text-black w-full sm:h-24 xs:h-auto" />
                {errors.textarea && touched.textarea ? (
                  <div className="text-red-600 text-sm">{errors.textarea}</div>
                ) : null}
              </div>
              <button type="submit" className="bg-violet-900 text-white py-2 px-4 rounded sm:mt-4 xs:mt-3">
                Send
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Modal;