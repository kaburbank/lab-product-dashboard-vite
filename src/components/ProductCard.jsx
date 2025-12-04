import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  const outOfStock = !product.inStock;
  return (
    <div
      className={
        outOfStock
          ? `${styles.productCard} ${styles.outOfStockClass} outOfStockClass`
          : styles.productCard
      }
    >
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>{product.price}</p>
      <p className={`${styles.productAvailability} ${product.inStock ? styles.inStock : styles.outOfStock}`}>
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      <button 
        className={styles.removeButton}
        onClick={() => onRemove(product.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default ProductCard;
