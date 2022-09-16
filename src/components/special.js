import React from 'react'
import Discord from '../images/discord.jpg'

const special = () => {
    return (
        <div className='special_wrapper'>
            <div className='special_content'>
                <div className='img'>
                    <img src={Discord} alt="" />
                </div>
                <div className='special'>
                    <h2>We operate on Discord</h2>
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
        </div>
      )
}

export default special