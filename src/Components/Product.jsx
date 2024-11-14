import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart} from '../Redux/cartSlice';
import { MdOutlineDeleteForever } from 'react-icons/md';

const Product = (props) => {
    const {id, title, price, image, quantity} = props.data;
    const dispatch = useDispatch();

    return (
        <div key={id} className='flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700 gap-5 rounded-md'>
      <div className='w-12 h-8'><img src={image} alt="image" className='w-full h-8 object-cover'/></div>
      <h3>{title.slice(0, 12)}</h3>
      
      <div className='flex gap-2'>
      <p>$ {(price * quantity).toFixed(2)}</p>
      <div className="w-20 flex justify-between">
        <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-800 font-bold' onClick={()=> dispatch(decreaseQuantity(id))}>-</button>
        <span>{quantity}</span>
        <button className='bg-gray-200 rounded-full w-6 h-6 text-cyan-800 font-bold' onClick={()=> dispatch(increaseQuantity(id))}>+</button>
      </div>
      <span className='text-red-500 text-2xl cursor-pointer' onClick={()=> dispatch(removeFromCart(id))}><MdOutlineDeleteForever /></span>
      </div>
    </div>
    );
};

export default Product;
