import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/ventes">Ventes</Link></li>
      <li><Link to="/stocks">Stocks</Link></li>
      <li><Link to="/clients">Clients</Link></li>
    </ul>
  </nav>
);

export default Navbar;
