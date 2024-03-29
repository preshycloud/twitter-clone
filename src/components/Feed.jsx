import React from 'react'
import '../styles/Feed.css'
import TweetBox from './TweetBox'
import Post from '../components/Post'

function Feed() {
  return (
    <div className='feed'>
      {/* Header */}
        <div className="feed__header"></div>
        <h2>Home</h2>
      {/* TweetBox */}
        <TweetBox/>

      {/* Post */}
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      
    </div>
  )
}

export default Feed
