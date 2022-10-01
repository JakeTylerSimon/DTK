import React from 'react'
import Astro from '../images/astro.png'

const About = () => {
  return (
    <div className='about_wrapper'>
      <div className='about_content'>

        <div className='img'>
            <img src={Astro} alt="" />
        </div>
        <div className='about'>
            <h2>Why DTK is special</h2>
            <p>What started as a group of friends with 
              little to invest became so much more as
                we consistently outperformed the market. 
                DTK was created to help others find 
                financial freedom by bringing news, data, 
                education and AI all in one place, whether 
                you have $100 or $1,000,000 to invest.</p>
                
          <p>Our members are family. Every one of us 
              made the decision to take control of our 
              lives and brings our own set of experiences 
              to the table. Join a group of like-minded 
              entrepreneurs who share the common vision 
              of changing the world and living their dreams, 
              untethered.</p>
        </div>
      </div>
    </div>
  )
}

export default About