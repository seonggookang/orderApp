import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
}

 // CartProvider 로부터 바깥에 두는 이유: 
 // CartProvider 컴포넌트에서 아무것도 필요하지 않기때문
 // 컴포넌트가 재평가 될 때마다 항상 재생성 되어서도 안되기 때문.
const cartReducer = (state, action) => { // state object
  if(action.type === 'ADD') {
    // push와 다른 점 : 배열을 편집하는게 아니라 새 배열을 반환.
    // old state snapshot을 건들고 싶지 않다.
    // 메모리의 기존 데이터가 편집 되지 않는다.(concat)
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
}

const CartProvider = (props) => {
  // useReducer는 2개의 요소로 된 배열을 반환
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatchCartAction({type: 'ADD', item: item})
  };

  const removeItemToCartHandler = id => {
    dispatchCartAction({type: 'REMOVE', id: id})
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider