import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  // reduce 데이터 배열을 값 하나로 변환
  const numberOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  } , 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton