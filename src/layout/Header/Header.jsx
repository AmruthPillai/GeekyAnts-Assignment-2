import React from 'react';
import './Header.css';
import Avatar from '../../assets/images/avatar.png';

export default function Header() {
  return (
    <div id="Header" className="text-white">
      <div className="row h-100">
        <div className="col col-lg-2 flex-center">
          <div className="d-flex flex-column">
            <img className="avatar rounded-circle mb-3" src={Avatar} alt="Avatar" />
            <h6 className="font-weight-bold mb-1">Chetan Hedge</h6>
            <span>UI/UX Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
