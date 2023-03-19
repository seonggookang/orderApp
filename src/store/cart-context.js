import React from 'react'

const CartContext = React.createContext({ // 이와 같으 코드 사용 이유: 자동완성 기능이 생김
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
})

export default CartContext