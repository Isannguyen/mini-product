import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import '../css/ProductPage.css'

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    fetchProduct()
  }, []);
 
  const fetchProduct = async ( ) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      const fetchedProducts = response.data;
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);

      const uniqueCategories: string[] = Array.from(new Set(fetchedProducts.map((product: any) => product.category)));
  
      setCategories(uniqueCategories);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  const handleAddToFavorites = (product: any) => {
    const currentFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (!currentFavorites.find((item: any) => item === product.id)) {
      currentFavorites.push(product.id);
      localStorage.setItem('favorites', JSON.stringify(currentFavorites)); 
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =  e.target.value

      setSearchTerm(value)

      const filtered = products.filter( product => 
        product.title.toLowerCase().includes(value.toLowerCase()) || 
        product.description.toLowerCase().includes(value.toLowerCase())
      )

      setFilteredProducts(filtered)
  };

  const handleCategoryFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);

    if (selectedCategory) {
      const filteredByCategory = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filteredByCategory);
    } else {
      setFilteredProducts(products); 
    }
  };

  return (
    <div className="productPage">

      <div className="action">
        <input
          type="text"
          placeholder="Search product..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />

        <select value={selectedCategory} onChange={handleCategoryFilter} className="category-select">
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>
      </div>


      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <h1>No product found</h1>
        ):(
          filteredProducts.map(product =>(
            <ProductCard key={product.id} onAddToFavorites={handleAddToFavorites} product={product}></ProductCard>
          ))
        )}
      
      </div>
    </div>
  );
};

export default ProductPage;
