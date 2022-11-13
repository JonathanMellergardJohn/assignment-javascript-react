import React from 'react'
import CrumbsSection from '../sections/CrumbsSection';
import FormSection from '../sections/FormSection';
import HeaderSection from '../sections/HeaderSection';
import MapSection from '../sections/MapSection';

const ContactView = () => {
  return (
    <>
      <HeaderSection backgroundcolor="bg--white" />
      <CrumbsSection />
      <MapSection />
      <FormSection />

    </>
  )
}

export default ContactView