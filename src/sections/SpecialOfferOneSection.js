import React, {useState} from 'react'
import Btn from '../components/Btn'
import ProductCard from '../components/ProductCard'

const SpecialOfferOneSection = () => {

  const [products, setProducts] = useState([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$30.00", oldPrice: "$35.00", rating: 5, imgUrl: "" },
    { id: 2, name: "Modern Black Blouse", category: "Hats", price: "$30.00", oldPrice: "$35.00", rating: 5, imgUrl: "" },
    { id: 3, name: "Modern Black Blouse", category: "Shoes", price: "$30.00", oldPrice: "$35.00", rating: 5, imgUrl: "" },
    { id: 4, name: "Modern Black Blouse", category: "Accessories", price: "$30.00", oldPrice: "$35.00", rating: 5, imgUrl: "" }
  ])

  return (
    <section className="special-offer-1-section bg--white">
        <div className="special-offer">
            <h2 className="special-offer__header">2 FOR $29</h2>
            <Btn btnText="FLASH SALE" btnColor="btn--white"/>
        </div>
        <div className="grid">
          {
          products.map(product => <ProductCard item={product} />)
          }
        </div>
    </section>
  )
}

export default SpecialOfferOneSection