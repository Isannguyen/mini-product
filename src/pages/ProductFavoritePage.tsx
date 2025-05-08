import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductFavoritePage: React.FC = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<any[]>([]);

  useEffect(() => {
    const favoritesIds = JSON.parse(localStorage.getItem('favorites') || '[]');

    const fetchFavoriteProducts = async () => {
      try {
        const fetchedProducts = await Promise.all(
          favoritesIds.map((id: number) =>
            axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => response.data)
          )
        );
        setFavoriteProducts(fetchedProducts);
      } catch (error) {
        console.log('error fetching product by id',error); 
      }
    };

    fetchFavoriteProducts();
  }, []);

  const handleAddToFavorites = (product:any) => {
    console.log('hello')
  }

  return (
    <div>
      <h2>Favorite Products</h2>

      {favoriteProducts.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <div className="product-list">
          {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} onAddToFavorites={handleAddToFavorites} />
          ))}
       </div>
      )}
    </div>
  );
};

export default ProductFavoritePage;
