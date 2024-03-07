// components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products';
import '../css/product-list.css';

const ProductList = () => {
  return (
    <div className="product-list">
      {productsData.map(product => (
        <div className="product" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div className='image'>
            <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
              <div className="product-title">{product.title}</div>
              <div className="product-price">${product.price}</div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
