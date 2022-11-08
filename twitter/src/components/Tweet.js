//Tweet
import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Tweet = ({ tweet, showComments, addComment }) => {
  return (
    <div 
        className={`task ${tweet.reminder && 'reminder'}`}
    >
      <h3>
        {`${tweet.user}-${tweet.id}`}{' '}
        <button onClick={() => showComments(tweet.id)} className='btn btn-comment'> View </button>
        <button onClick={() => addComment(tweet.id)} className='btn btn-comment'> Comment </button>
      </h3>
      <p>{tweet.tweet}</p>
    </div>
  )
}

export default Tweet