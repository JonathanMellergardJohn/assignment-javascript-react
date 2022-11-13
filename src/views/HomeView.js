import React from 'react'
import FeaturedProductsSection from '../sections/FeaturedProductsSection'
import HeaderSection from '../sections/HeaderSection'
import Sale70OffSection from '../sections/Sale70OffSection'
import SaleNNewArrivalSection from '../sections/SaleNNewArrivalSection'
import ServiceInfoSection from '../sections/ServiceInfoSection'
import ShoppingCategoriesSection from '../sections/ShoppingCategoriesSection'
import ShowcaseSection from '../sections/ShowcaseSection'
import SpecialOfferOneSection from '../sections/SpecialOfferOneSection'
import SpecialOfferTwoSection from '../sections/SpecialOfferTwoSection'
import SpecialtySection from '../sections/SpecialtySection'
import TopPicksNConsciousSection from '../sections/TopPicksNConsciousSection'

const HomeView = () => {
  return (
    <>
      <HeaderSection backgroundcolor="bg--grey-gradient"/>
      <ShowcaseSection />
      <SaleNNewArrivalSection />
      <FeaturedProductsSection />
      <TopPicksNConsciousSection />
      <SpecialtySection />
      <SpecialOfferOneSection />
      <SpecialOfferTwoSection />
      <Sale70OffSection />
    </>
  )
}

export default HomeView