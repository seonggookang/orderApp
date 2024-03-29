import React from 'react'
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

const Cart = (props) => {
  const cartItems = <ul className={classes['cart-items']}>
    {[{
      id: 'c1', name: 'Sushi', amount: 2, price: 12.99
    },].map((item,idx) => <li key={idx}>{item.name}</li>)}
  </ul>;

    // <div> {/* 장바구니는 div 안에 있으며 안된다. */}

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart