import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCartTab } from '../Redux/cartSlice';
import Product from '../Components/Product';


const Cart = () => {
  const cartTab = useSelector(store => store.cart.cartTab);
  const productInCart = useSelector(state => state.cart.cartItems);
  const bill = useSelector(state => state.cart.totalAmount);
  const totalBill = bill.toFixed(2);
  const dispatch = useDispatch();

  
  return (
    <div className={`fixed right-0 top-0 bg-gray-700 shadow-2xl w-[400px] mx-w-[500px] h-full grid grid-rows-[60px_1fr_60px] transform ${cartTab === false ? "translate-x-full" : " "}`}>
      <div className="flex justify-between text-white text-2xl">
      <h2 className="p-5">Your Cart</h2>
      <h2 className="p-5">Total Bill : $ {totalBill}</h2>

      </div>
      <div>
         {
            productInCart.map((item, key) =>
                <Product key={key} data={item} />
            )
        } 
      </div>
      <div className="grid grid-cols-2">
        <button className='bg-black text-white' onClick={() => dispatch(toggleCartTab())} >CLOSE</button>
        <button className='bg-amber-600'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cart
