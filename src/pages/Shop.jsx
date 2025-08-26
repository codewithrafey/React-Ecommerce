import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offer from '../components/offer/Offer'
import NewCollections from '../components/newCollections/NewCollections'
import NewsLetter from '../components/newsletter/NewsLetter'
import Footer from '../components/footer/Footer'

function Shop() {
  return (
    <div>
        <Hero />
        <Popular />
        <Offer />
        <NewCollections />
        <NewsLetter />
    </div>
  )
}

export default Shop