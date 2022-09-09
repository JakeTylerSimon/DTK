import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import News from '../components/newsletter'

const RootIndex = () => {
    
    return (
      <Layout>
          <Seo title="Sign Up" />

            <div className="">
                <div className="containery-log">
                    <div class="contact-boxy">
                        <div class="righty">
                            <h2>Welcome Back</h2>
                            <input type="email" class="field" placeholder="Your Email"/>
                            <input type="password" class="field" placeholder="Password"/>
                            <button class="contact_btn">Log In</button>
                        </div>
                        <div class="lefty-log"></div>
                    </div>
                </div>
            </div>

        <News />
      </Layout>
    )
}
export default RootIndex