import React from 'react';
import './CartWidget.css';

function CartWidget() {
  const quantity = 4; // Valor fijo que quieres mostrar

  return (
    <div className="cart-widget">
      <img
        src="https://cdn-icons-png.flaticon.com/512/34/34568.png"
        alt="Carrito de compras"
        className="cart-icon"
      />
      <div className="cart-badge">{quantity}</div>
    </div>
  );
}

export default CartWidget;