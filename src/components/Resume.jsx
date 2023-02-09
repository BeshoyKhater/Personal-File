import React from 'react'
import ShortBio from './resume/ShortBio'
import Skills from './resume/Skills'

const Resume = () => {
  return (
    <section id='resume' className="container">
      <ShortBio />
      <Skills />
    </section>
  )
}

export default Resume