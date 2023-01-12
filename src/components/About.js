import React from 'react'

function About({image="https://via.placeholder.com/215", parag}) {
  return (
    <aside>
        <img src={image} alt="blog logo"></img>
        <p>{parag}</p>
    </aside>
  )
}

export default About