import React from 'react'
import AppBar from './AppBar/AppBar';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
      <>
          <AppBar />
          <Outlet />
      </>
    
  )
}

export default SharedLayout;
