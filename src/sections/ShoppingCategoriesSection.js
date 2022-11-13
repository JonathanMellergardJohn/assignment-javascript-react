import React from 'react'
import ProductCard from '../components/ProductCard'

const ShoppingCategoriesSection = () => {
  return (
    <section className="shopping-categories-section">
        <div className="shopping-categories-latest">

            <h2 className="shopping-categories-header">Latest Product</h2>
            <div className="grid grid--2-by-2">
                <ProductCard />
                <ProductCard />
            </div>
        </div>
        <div className="shopping-categories-best-selling">
            <h2 className="shopping-categories-header">Best Selling Products</h2>
            <div className="grid grid--2-by-2">
                <ProductCard />
                <ProductCard />
            </div>
        </div>
        <div className="shopping-categories-top-rated">
            <h2 className="shopping-categories-header">Top Rated Products</h2>
            <div className="grid grid--2-by-2">
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    </section>
  )
}

export default ShoppingCategoriesSection