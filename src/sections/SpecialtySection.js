import React from 'react'
import SpecialtyCard from '../components/SpecialtyCard'

const SpecialtySection = () => {
  return (
    <section className="specialty-section bg-white">
        <div className="specialty-container">
            <h2 className="specialty-header">Our Specialty</h2>
            <div className="specialty-card-container">
                <SpecialtyCard headerText="Track Your Order" />
                <SpecialtyCard headerText="Make a Return" />
                <SpecialtyCard headerText="Price Adjustment" />
            </div>
        </div>
    </section>
  )
}

export default SpecialtySection