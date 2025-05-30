import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const ProductFavoritePage: React.FC = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<any[]>([]);

  const fetchFavoriteProducts = async (favoritesIds: number[]) => {
    try {
      const fetchedProducts = await Promise.all(
        favoritesIds.map((id: number) =>
          axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => response.data)
        )
      );
      setFavoriteProducts(fetchedProducts); // Lưu sản phẩm vào state
    } catch (error) {
      console.error('Error fetching product by id', error);
    }
  };

  useEffect(() => {
    const favoritesIds = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favoritesIds.length > 0) {
      fetchFavoriteProducts(favoritesIds);
    }
  }, []); 

  return (
    <div>
      <h2>Favorite Products</h2>

      {favoriteProducts.length === 0 ? (
        <h1 style={{padding:"0 20px"}}>No favorite products yet.</h1>
      ) : (
        <div className="product-list">
          {favoriteProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductFavoritePage;
