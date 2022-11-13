import React from 'react'
import ImgWinter from '../assets/images/img-winter-clearance.png'
import ImgArrivals from '../assets/images/img-new-arrivals.png'
import Banner from '../components/Banner'

const SaleNNewArrivalSection = () => {
  return (
    <section className="sale-n-new-arrival-section bg--white">
        <div className="sale-n-new-arrival-container">
            <Banner img={ImgWinter} headerText="Winter Clearance up to 70% off!" btnColor="btn--dark" btnText="SHOP NOW"/>
            <Banner img={ImgArrivals} headerText="New Arrivals" btnColor="btn--dark" btnText="SHOP NOW"/>
        </div>
    </section>
  )
}

export default SaleNNewArrivalSection