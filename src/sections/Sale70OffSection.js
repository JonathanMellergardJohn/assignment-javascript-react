import React from 'react'
import Btn from '../components/Btn'

const Sale70OffSection = () => {
  return (
    <section className="sale-70-off-section">
        <div className="special-offer special-offer--variation">
            <h2 className="special-offer__header">Up to 70% off*</h2>
            <p className="special-offer__sub-header">Women's, Men's & Kids' Winter Fashion</p>
            <Btn btnColor="btn--white" btnText="FLASH SALE"/>
        </div>
    </section>
  )
}

export default Sale70OffSection