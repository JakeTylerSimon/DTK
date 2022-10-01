import React from 'react'

const Newsletter = () => {
  return (
    <div className='news_wrapper'>
        <h4>Sign up for promos, announcements and more 🥳</h4>
        <form action="" >
            <input className='input' placeholder='Name' type="text" id="name" name="name" />
            <input className='input' placeholder='Email' type="email" id="email" name="email" /><br/>
            <input className='submitBtn' type="submit" value="Submit"/>
        </form>
    </div>
  )
}

export default Newsletter