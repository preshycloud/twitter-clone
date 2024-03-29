import React from 'react'
import   '../styles/Widgets.css'
import { TwitterTimelineEmbed, TwitterShareButton,TwitterFollowButton, TwitterTweetEmbed } from 'react-twitter-embed';
import  {Search }  from '@mui/icons-material';

function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets__input">
            <Search
                className="widgets__searchIcon"
            />
            <input 
            placeholder='Search Twitter'
            type="text" 
            />
        </div>

        <div className="widgetsContainer">
            <h2>What's happening</h2>
        </div>
        <TwitterTweetEmbed tweetId ={"1321351808086798343"}
        />

        <TwitterTimelineEmbed
        sourceType = "profile"
        screenName = "akky_im"
        options = {{height: 400}}
        />
        <TwitterShareButton
            url='https://www.instagram.com/_ade.precious/'
            options={{text: "Subscribe my Youtube Channel #EverydayWithPrecious", via: "_ade.precious"}}
        />
      
    </div>
  )
}

export default Widgets
