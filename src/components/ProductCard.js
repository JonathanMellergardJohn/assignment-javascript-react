import React from 'react'

const ProductCard = ({item}) => {
    
  return (
    <div className="product-card"> 
        <div className="product-card__img">
            <div className="product-card__links">
                <a href="#" className="round-link round-link--f-product-card"><i className="round-link__icon fa-regular fa-repeat"></i></a>
                <a href="#" className="round-link round-link--f-product-card"><i className="round-link__icon fa-regular fa-heart"></i></a>
                <a href="#" className="round-link round-link--f-product-card"><i className="round-link__icon fa-regular fa-bag-shopping"></i></a>
            </div>
            <a href="/product-page.html" className="product-card__btn">QUICK VIEW</a>
        </div>                
        <div className="product-card__content-container">
            <p className="product-card__category">{item.category}</p>
            <h3 className="product-card__product-name">{item.name}</h3>
            <div className="product-card__costomer-rating">
                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                <i className="fa-sharp fa-solid fa-star-sharp"></i>
            </div>
            <div className="product-card__prices">
                <p className="product-card__old-price product-card__old-price--none">{item.oldPrice}</p>
                <p className="product-card__current-price">{item.price} </p>
            </div>
        </div> 
    </div>   
  )
}

export default ProductCard