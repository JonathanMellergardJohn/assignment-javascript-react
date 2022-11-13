import React, { useState} from 'react'
import ProductCard from '../components/ProductCard'

// NOTE: hade varit bättre att skapa en component som heter 'productGrid'!
// TILL 'productGrid' skickas information FRÅN varje '...Section' om hur  
// många productCards som ska genereras, istället för att det hårdkodas
// i varje '...Section'!

const FeaturedProductsSection = () => {

  const [products, setProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$30.00", oldPrice: "$35.00", rating: 5, imgUrl: "" },
    { id: 2, name: "Modern Black Blouse", category: "Hats", price: "$30.00", oldPrice: "$35.00", rating: 5, imgUrl: "" },
    { id: 3, name: "Modern Black Blouse", category: "Shoes", price: "$30.00", oldPrice: "$35.00", rating: 5, imgUrl: "" },
    { id: 4, name: "Modern Black Blouse", category: "Accessories", price: "$30.00", oldPrice: "$35.00", rating: 5, imgUrl: "" }
  ])

  return (
    <section className="featured-products-section bg--white">
      <div className="featured-products-container">
        <h2 className="featured-products-header">Featured Products</h2>
        <div className="grid">
          {
          products.map(product => <ProductCard item={product} />)
          }
        </div>
      </div>
    </section>
)
}

export default FeaturedProductsSection