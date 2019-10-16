import React from 'react';
import './MobileSidebar.css';
import Sidebar from '../Sidebar/Sidebar';

export default function MobileSidebar() {
  return (
    <div id="MobileSidebar" className="shadow-lg pr-4">
      <div className="container pr-5">
        <Sidebar />
      </div>
    </div>
  );
}
