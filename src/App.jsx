import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  //Define sample product data as array of objects
  const initialProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all'); // 'all', 'inStock', 'outOfStock'

  //Define function to filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === 'all') return true;
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true;
  });

  //Define function to reemove product from the list
  const handleRemoveProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setFilter('all')}
          style={{ marginRight: '12px', padding: '10px 20px' }}
        >
          All Products
        </button>
        <button 
          onClick={() => setFilter('inStock')}
          style={{ marginRight: '12px', padding: '10px 20px' }}
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
