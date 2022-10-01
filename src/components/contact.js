import React from 'react'

const Contact = () => {
  return (
    <div className=''>

      <div className="containery">
            <div className="contact-boxy">
                <div className="lefty"></div>
                <div className="righty">
                    <h2>Reach Out</h2>
                    <input type="text" className="field" placeholder="Your Name"/>
                    <input type="text" className="field" placeholder="Your Email"/>
                    <input type="text" className="field" placeholder="Phone"/>
                    <textarea placeholder="Message" className="field"></textarea>
                    <button className="contact_btn">Send</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Contact