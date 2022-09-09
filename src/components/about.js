import React from 'react'
import Astro from '../images/astro.png'

const about = () => {
  return (
    <div className='about_wrapper'>
        <div className='img'>
            <img src={Astro} alt="" />
        </div>
        <div className='about'>
            <h2>Why DTK is special</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.</p>
        </div>
    </div>
  )
}

export default about