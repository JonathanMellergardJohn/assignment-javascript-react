import React from 'react'

const SpecialtyCard = ({headerText, img}) => {
  return (
    <div class="specialty-card">
        <div class="specialty-card__content-container">
            <h3 class="specialty-card__header">{headerText}</h3>
            <a href="#" class="specialty-card__link">Get started ></a>
        </div>
        <div class="specialty-card__img-container"><img src={img} /></div>
    </div>
  )
}

export default SpecialtyCard