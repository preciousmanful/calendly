// pages/ProductDetailPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = productsData.find(product => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">${product.price}</p>
        <p className="product-description">{product.description}</p>
        {/* Add button to add product to cart */}
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
