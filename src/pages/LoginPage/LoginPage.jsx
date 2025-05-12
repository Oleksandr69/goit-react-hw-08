import React from 'react'
import LoginForm from '../../components/LoginForm';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  if (isLoggedIn) {
    return <Navigate to='/' />;
  }
  return (
    <div>
      <LoginForm />
    </div>
  )
}

export default LoginPage;
