import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Feature from '../components/features'
import News from '../components/newsletter'

const RootIndex = () => {
    
    return (
      <Layout>
          <Seo title="Sign Up" />

            <div className="">
                <div className="containery-sign">
                    <div class="contact-boxy">
                        <div class="lefty-sign"></div>
                        <div class="righty">
                            <h2>Join Us</h2>
                            <input type="text" class="field" placeholder="Your Name"/>
                            <input type="email" class="field" placeholder="Your Email"/>
                            <input type="password" class="field" placeholder="Password"/>
                            <input type="password" class="field" placeholder="Confirm Password"/>
                            <button class="contact_btn">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

        <Feature />
        <News />
      </Layout>
    )
}
export default RootIndex