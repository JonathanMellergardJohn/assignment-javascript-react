import React from 'react'
import { NavLink } from 'react-router-dom'

const CrumbsSection = () => {
  return (
    <section className="crumbs-section">
        <ul className="breadcrumbs">
            <li className="breadcrumbs__location"><NavLink className="breadcrumbs__location-link" to="/">Home</NavLink></li>
            <li className="breadcrumbs__location">Contact</li>
        </ul>
    </section>
  )
}

export default CrumbsSection