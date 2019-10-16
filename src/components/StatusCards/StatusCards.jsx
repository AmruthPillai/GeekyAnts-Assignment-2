import React from 'react';
import './StatusCards.css';
import StatusCard from '../StatusCard/StatusCard';

export default function StatusCards() {
  return (
    <div id="StatusCards" className="row">
      <StatusCard boxStyle="box__messages" icon="email" title="New Messages" amount="24" />
      <StatusCard boxStyle="box__users" icon="people" title="New Users" amount="50" />
      <StatusCard boxStyle="box__orders" icon="shopping_cart" title="New Orders" amount="37" />
      <StatusCard boxStyle="box__visitors" icon="person" title="New Visitors" amount="80" />
    </div>
  );
}
