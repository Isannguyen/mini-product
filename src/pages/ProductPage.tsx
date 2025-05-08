import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../css/ProductPage.css'

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);
 
  const handleAddToFavorites = (product: any) => {
    const currentFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (!currentFavorites.find((item: any) => item === product.id)) {
      currentFavorites.push(product.id);
      localStorage.setItem('favorites', JSON.stringify(currentFavorites)); 
    }
  };

  return (
    <div className="productPage">
      <h2>Product Catalog</h2>

      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} onAddToFavorites={handleAddToFavorites} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
