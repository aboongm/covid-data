import React from 'react';
import { Outlet } from 'react-router-dom';

import { FaMicrophone, FaCog } from 'react-icons/fa';

const Layout = () => (
  <>
    <header className="header d-flex align-items-center justify-content-center pt-3 pb-2 m-0">
      <h2 className="p-1">COVID19 STATISTICS</h2>
      <div className="icons">
        <FaMicrophone className="ms-2 icon" />
        <FaCog className="ms-2 icon" />
      </div>
    </header>
    <Outlet />
  </>
);

export default Layout;
