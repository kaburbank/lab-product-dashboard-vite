import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, onRemoveProduct }) => {
  if (!products || products.length === 0) {
    return <div>No products available</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onRemove={onRemoveProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
