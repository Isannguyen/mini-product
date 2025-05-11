import React, { useState, useEffect } from 'react';
import '../css/ProductCard.css'

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const getFavoriteIds = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  };


  const toggleFavorite = (productId: number) => {
    const favoriteIds = getFavoriteIds();
    const updatedFavorites = isFavorite
      ? favoriteIds.filter(id => id !== productId)
      : [...favoriteIds, productId];

    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
   
    const isProductFavorite = getFavoriteIds().includes(product.id);
    setIsFavorite(isProductFavorite);
  }, [product.id]); 

  return (
    <div className="product-card">
      <div className="img-product">
        <img src={product.image} alt={product.title} />
      </div>

      <p className="title">{product.title}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>

      <button onClick={() => toggleFavorite(product.id)} className={isFavorite ? 'remove':''}>
        {isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
      </button>
    </div>
  );
};

export default ProductCard;
