import React from 'react'
import Popular from '../components/popular/Popular'
import Offer from '../components/offer/Offer'
import NewCollections from '../components/newCollections/NewCollections'
import NewsLetter from '../components/newsletter/NewsLetter'
import Hero from '../components/herosec/Hero'

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