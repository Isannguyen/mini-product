import React from 'react';
import '../css/ProductCard.css'; 
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
  onAddToFavorites: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToFavorites }) => {
  return (
    <div className="product-card">
      <div className="img-product">
        <img src={product.image} alt={product.title} />
      </div>
      
      <p>{product.title}</p>

      <p>Price: ${product.price}</p>
        
      <button onClick={() => onAddToFavorites(product)}>Add to Favorite</button>
    </div>
  );
};

export default ProductCard;
