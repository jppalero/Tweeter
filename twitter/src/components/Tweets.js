// Tweets
import React from 'react'
import Tweet from './Tweet'

const Tweets = ({ tweets, showComments, addComment, commentId}) => {

  return (
    <>
      {tweets.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} showComments={showComments} addComment={addComment} commentId={commentId} />
      ))}
    </>
  )
}

export default Tweets