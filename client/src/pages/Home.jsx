import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestinaton from '../components/FeaturedDestinaton'
import ExclussiveOffers from '../components/ExclussiveOffers'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedDestinaton/>
      <ExclussiveOffers/>
      <Testimonial/>
      <NewsLetter/>
    </>
  )
}

export default Home
