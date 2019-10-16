/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import NavbarBG from '../../assets/backgrounds/navbar_bg.png';
import DashboardLogo from '../../assets/logos/logo.svg';
import Avatar from '../../assets/images/avatar.png';

export default function Navbar({ navbarOpen, setNavbarOpen }) {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = () => {
    setOpacity(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="Navbar" className="d-flex justify-content-between align-items-center px-4">
      <img className="position-absolute" style={{ top: 0, left: 0, opacity: opacity / 250 }} src={NavbarBG} alt="Navbar Background" />

      <div className="logo d-flex align-items-center" style={{ zIndex: 10 }}>
        <i onClick={() => setNavbarOpen(!navbarOpen)} className="d-block d-lg-none material-icons text-white mr-3 cursor-pointer">menu</i>
        <img src={DashboardLogo} alt="Dashboard Logo" />
      </div>

      <div className="navigation d-flex align-items-center text-white" style={{ zIndex: 10 }}>
        <div className="d-none d-lg-block">Profile</div>
        <div className="d-none d-lg-block">Messages</div>
        <div className="d-none d-lg-block">Activity</div>
        <div className="d-none d-lg-block">Settings</div>
        <img className="avatar rounded-circle ml-3 mr-2" src={Avatar} alt="Avatar" />
        <i className="material-icons">more_vert</i>
      </div>
    </nav>
  );
}
