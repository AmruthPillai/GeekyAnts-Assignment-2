/* eslint-disable react/prop-types */

import React from 'react';
import './StatusCard.css';

export default function StatusCard({
  boxStyle, icon, title, amount,
}) {
  return (
    <div className="col">
      <div className="card d-flex flex-row justify-content-between border-0 shadow-sm">
        <div className={`box ml-4 shadow-sm flex-center text-white ${boxStyle}`}>
          <i className="material-icons">{icon}</i>
        </div>
        <div className="d-flex my-4 flex-column mr-4 text-right">
          <h6 className="mb-1 text-secondary">{title}</h6>
          <h1 className="font-weight-bold">{amount}</h1>
        </div>
      </div>
    </div>
  );
}
