import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Product from '../Components/Product';
import { fetchProducts, selectProducts, selectLoading, selectError } from '../Redux/productSlice';
import { addToCart } from '../Redux/cartSlice';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    
      }
    

    const cards = products.map(product => (
        <div className="bg-white shadow-md rounded-md p-3 flex flex-col justify-between" key={product.id}>
          <div className="info">
            
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        
            <div className="flex justify-between p-2">
              <h1>{product.title}</h1>
              <h2 className="font-bold">${product.price}</h2>
            </div>
            <p>{product.description.slice(0, 50)}</p>
          </div>
          <div className="flex justify-between my-3">
            
            <Link to={`/ProductDetails/${product.id}`}>
              <button className="bg-zinc-200 hover:bg-black hover:text-white px-4 py-2">
                Details
              </button>
          </Link>
            <button className="bg-black text-white hover:scale-110 px-4 py-2" onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ));

     

    if (loading) return <div className='mt-[300px] text-center'>Loading...</div>;
    if (error) return <div className='mt-[300px] text-center'>Error: {error}</div>;

    return (
      
        <div>
        <ul>
            {products.map(product => (
                <div key={product.id}>
                <h1 className="text-3xl text-center my-10">Latest Products</h1>
                <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cards}
                </div>
              </div>
            ))}
        </ul>
    </div>
    );
};

export default ProductList;