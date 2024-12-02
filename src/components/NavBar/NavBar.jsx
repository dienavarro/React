import React from 'react';
import './Navbar.css';
import CartWidget from '../CarWidget/CartWidget';


function NavBar() {
  return (
    <nav>
      <h1>Pura Quimica</h1>
      <ul>
        <li><a href="#categoria1">Categoría 1</a></li>
        <li><a href="#categoria2">Categoría 2</a></li>
        <li><a href="#categoria3">Categoría 3</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;




const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #ddd',
    },
    brand: {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: 0,
    },
    menu: {
      listStyle: 'none',
      display: 'flex',
      gap: '15px',
      margin: 0,
      padding: 0,
    },
    menuItem: {
      cursor: 'pointer',
    },
  };
  