import React from 'react'
import Discord from '../images/discord.jpg'

const Special = () => {
    return (
        <div className='special_wrapper'>
            <div className='special_content'>
                <div className='img'>
                    <img src={Discord} alt="" />
                </div>
                <div className='special'>
                    <h2>We operate on Discord</h2>
                    <p>This is where you will learn literally everything.
                        We hold live training calls to help everyone in the group
                        make money. We also have constant communication and collaberation
                        to ensure everyone is getting the most quality for their time.
                    </p>
                         
                    <p>There are channels and threads dedicated to each entreprenuerial interest
                        that our members help coach and support one another as they learn and 
                        dive into that field of work to ensure a better future for themselves and their family.
                    </p>
                </div>
            </div>
        </div>
      )
}

export default Special