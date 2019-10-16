/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './SidebarCard.css';

export default function SidebarCard({
  icon, title, active, onClick,
}) {
  return (
    <div id="SidebarCard" className="col-6" onClick={onClick}>
      <div className={`card border-0 ${active ? 'active' : ''}`}>
        <div className="card-body flex-center flex-column">
          <img className="mb-2" src={icon} alt={title} />
          <span className="mt-1">{title}</span>
        </div>
      </div>
    </div>
  );
}
