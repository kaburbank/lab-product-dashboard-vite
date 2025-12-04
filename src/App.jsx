import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  // Sample product data
  const initialProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all'); // 'all', 'inStock', 'outOfStock'

  // Filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true;
  });

  // Remove product from the list
  const handleRemoveProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setFilter('all')}
          style={{ marginRight: '10px', padding: '8px 16px' }}
        >
          All Products
        </button>
        <button 
          onClick={() => setFilter('inStock')}
          style={{ marginRight: '10px', padding: '8px 16px' }}
        >
          In Stock
        </button>
        <button 
          onClick={() => setFilter('outOfStock')}
          style={{ padding: '8px 16px' }}
        >
          Out of Stock
        </button>
      </div>

      <ProductList 
        products={filteredProducts} 
        onRemoveProduct={handleRemoveProduct}
      />
    </div>
  );
};

export default App;
