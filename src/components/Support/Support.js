import React from 'react';
import Button from 'react-bootstrap/Button';
import coffee from './assets/coffee-cup.png';
import './style.css';

const Support = () => (
  <div className="support-coffee">
    <h3>All Donations here!</h3>
    <img src={coffee} width="100" alt="Support Coffee" />
    <Button className="mt-3" variant="primary">Buy me coffee</Button>
  </div>
);

export default Support;
