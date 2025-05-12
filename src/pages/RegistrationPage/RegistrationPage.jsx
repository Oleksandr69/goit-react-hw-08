import React from 'react'
import { useSelector } from 'react-redux';
import RegistrationForm from '../../components/RegistrationForm';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to='/' />;
  }
  return (
    <div>
      <RegistrationForm />
    </div>
  )
}

export default Register;