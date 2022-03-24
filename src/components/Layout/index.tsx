import React from 'react';
import Menu from '../Navbar';
import './styles.css';
import { propTypes } from '../../utils/interfaces';



const Layout = ({ children }:propTypes) => {
  return (
    <>
      <div className='Layout-content'>{children}</div>
    </>
  );
};

export default Layout;
