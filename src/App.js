import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactView from './views/ContactView'
import NotFoundView from './views/NotFoundView'
import CategoriesView from './views/CategoriesView';
import CompareView from './views/CompareView';
import ProductView from './views/ProductView';
import SearchView from './views/SearchView';
import ShoppingcartView from './views/ShoppingcartView';
import WishlistView from './views/WishlistView';
import FooterSection from './sections/FooterSection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contact" element={<ContactView />} />
        <Route path="*" element={<NotFoundView />} />
        <Route path="/categories" element={<CategoriesView />} />
        <Route path="/compare" element={<CompareView />} />
        <Route path="/products" element={<ProductView />} />
        <Route path="/search" element={<SearchView />} />
        <Route path="/shoppingcart" element={<ShoppingcartView />} />
        <Route path="/wishlist" element={<WishlistView />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
