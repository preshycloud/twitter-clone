import { Avatar, Button } from '@mui/material'
import React from 'react'
import '../styles/TweetBox.css'


function TweetBox() {
  return (
    <div className='tweetBox'>
      <form action="">
        <div className="tweetBox__input">

            <Avatar
                src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"
            />

            <input 
            type="text"
            placeholder= "What's happening" 
            />
        </div>

        <input 
        className ='tweetBox__imageInput' 
        placeholder='optional: Enter Image URL' 
        />

        <Button className='tweetBox__tweetButton'>Tweet</Button>
      </form>
    </div>
  )
}

export default TweetBox
