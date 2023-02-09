import React from 'react'
import TypingAnimation from '../common/TypingAnimation'
import Info from './home/Info'
import Services from './home/Services'
import Slider from './home/Slider'

const Home = () => {
  return (
    <>
      <section id="about">
        <div className="container">
            <TypingAnimation />
            <Info />
            <Services />
            <Slider />
        </div>
      </section>
    </>
  )
}

export default Home