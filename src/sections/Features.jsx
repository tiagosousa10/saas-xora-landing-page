import React from 'react'
import { features } from '../constants'

const Features = () => {
   console.log('features: ', features)
  return (
    <section>
      <Element name="features">
         <div className='container'>
            <div className='relative flex'>
               {features.map((feature) => (
                  <div key={feature.id}>
                     {feature.title}
                  </div>
               ))}
            </div>

         </div>
      </Element>
    </section>
  )
}

export default Features
