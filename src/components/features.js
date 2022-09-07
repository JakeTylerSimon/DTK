import React from 'react'
import Stocks from '../images/stocks.jpg'
import Software from '../images/software.png'
import Ecom from '../images/ecom.png'
import Realestate from '../images/realestate.png'

const features = () => {
  return (
    <div className='features_wrapper'>
        <h2>What we offer </h2>

        <div className='feature_list'>
            <div className='feature '>
                <div className='img'>
                    <img src={Stocks} alt="" />
                </div>
                <div className='block'>
                    <h4>Live trading alerts</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div className='feature '>
                <div className='img'>
                    <img src={Software} alt="" />
                </div>
                <div className='block'>
                    <h4>Learn Web Development</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
        
        <div className='feature_list'>
            <div className='feature '>
                <div className='img'>
                    <img src={Ecom} alt="" />
                </div>
                <div className='block'>
                    <h4>Start getting sales</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat.</p>
                </div>
            </div>

            <div className='feature '>
                <div className='img'>
                    <img src={Realestate} alt="" />
                </div>
                <div className='block'>
                    <h4>Flip your first house</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut 
                        aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
        <h4 className='more'>And much more...</h4>
    </div>
  )
}

export default features