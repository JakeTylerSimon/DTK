import React from 'react'

const contact = () => {
  return (
    <div className=''>

      <div className="containery">
            <div class="contact-boxy">
                <div class="lefty"></div>
                <div class="righty">
                    <h2>Reach Out</h2>
                    <input type="text" class="field" placeholder="Your Name"/>
                    <input type="text" class="field" placeholder="Your Email"/>
                    <input type="text" class="field" placeholder="Phone"/>
                    <textarea placeholder="Message" class="field"></textarea>
                    <button class="contact_btn">Send</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default contact