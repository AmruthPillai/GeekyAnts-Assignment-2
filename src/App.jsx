import React, { useState } from 'react';
import Navbar from './layout/Navbar/Navbar';
import Header from './layout/Header/Header';
import Sidebar from './layout/Sidebar/Sidebar';
import Body from './layout/Body/Body';
import MobileSidebar from './layout/MobileSidebar/MobileSidebar';

export default function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="App container-fluid">
      {navbarOpen && <MobileSidebar />}

      <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <div className="spacer" style={{ height: 60 }} />
      <Header />

      <div className="row">
        <div className="d-none d-lg-block col-2">
          <Sidebar />
        </div>
        <div className="col">
          <Body />
        </div>
      </div>
    </div>
  );
}
