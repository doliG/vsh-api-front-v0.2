/**
 * Npm import
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Pure component
 */
const Navbar = () => (
  <div id="navbar">
    <NavLink to="/" exact activeClassName="active">Accueil</NavLink>
    <NavLink to="/customers" exact activeClassName="active">Clients</NavLink>
    {/* <NavLink to="/customers/3" exact activeClassName="active">One customer</NavLink> */}
    <NavLink to="/customers/new" exact activeClassName="active">Ajouter</NavLink>
    {/* <NavLink to="/customers/3/neworder" exact activeClassName="active">Add order</NavLink> */}
  </div>
);

/**
 * Export default
 */
export default Navbar;
