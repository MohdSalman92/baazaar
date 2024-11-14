import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
  const {id} = useParams();
  const [detail, setDetail] = useState([]);
  const products = useSelector(state => state.products.items)

  const count = useSelector((state) => state.cart.cartItems);
  const quantity = count.length;
  console.log(detail);

  useEffect(()=>{
    const findDetail = products.filter(product =>product.id === Number(id));
    if(findDetail.length > 0){
        setDetail(findDetail[0])
    }else{
        window.location.href = '/';
    }
},[id, quantity])
    
  return (
    <div>
      <h2 className="text-3xl text-center">Product Details</h2>
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        <div><img src={detail.image} alt="image" className='w-full h-[400px] object-cover' /></div>
        <div className="flex flex-col gap-5">
            <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
            <p className='text-3xl font-bold'>$ {detail.price}</p>
            <div className="flex gap-5">
                <div className="flex gap-2 items-center justify-center">
                    <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>-</button>
                    <span className='bg-gray-200 h-full font-bold w-10 text-xl flex items-center justify-center'>{quantity}</span>
                    <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' >+</button>
                </div>
            <button className='bg-slate-900 text-white px-7 py-3 rounded-xl shadow-2xl'>Add To Cart</button>
            </div>
            <p className="desc">{detail.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
