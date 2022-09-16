import React from 'react'

const priceTable = () => {
  return (
    <div id='prices' className='price_wrapper'>
            <h2>Pricing</h2>
        <div className="price_content">
            <div className="single-price">
                <h1>Monthly</h1>
                <div className="price">
                    <h3>$190</h3>
                </div>
                <div className="deals">
                    <h4>Test data</h4>
                    <h4>Test data</h4>
                    <h4>Test data</h4>
                    <h4>Test data</h4>
                    <h4>Test data</h4>
                </div>
                <a href="">Select Plan</a>
            </div>

            <div className="single-price">
                <h1>Annually</h1>
                <div className="price">
                    <h3>$1,999</h3>
                </div>
                <div className="deals">
                    <h4>Test data</h4>
                    <h4>Test data</h4>
                    <h4>Test data</h4>
                    <h4>Test data</h4>
                    <h4>Test data</h4>
                </div>
                <a href="">Select Plan</a>
            </div>

            <div className="single-price">
                <h1>Life-Time</h1>
                <div className="price">
                    <h3>$5,999</h3>
                </div>
                <div className="deals">
                    <h4>Test data</h4>
                    <h4>Test data</h4>
                    <h4>Test data</h4>
                    <h4>Test data</h4>
                    <h4>Test data</h4>
                </div>
                <a href="">Select Plan</a>
            </div>
        </div>
    </div>
  )
}

export default priceTable