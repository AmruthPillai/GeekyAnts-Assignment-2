/* eslint-disable react/prop-types */
import React from 'react';
import './SubmenuItem.css';

export default function SubmenuItem({ title, active }) {
  return (
    <div id="SubmenuItem" className="col-6 px-2 mb-3">
      <div className={`card shadow-sm border-0 ${active ? 'active' : ''}`}>
        <div className="card-body px-4 py-3">
          <span>{title}</span>
        </div>
      </div>
    </div>
  );
}
