//Tweet
import React from 'react'

const Comment = ({ comment }) => {
  return (
    <div 
        className={`comment ${comment.comment}`}
    >
      <h3>
        {comment.user}{' '}
      </h3>
      <p>{comment.comment}</p>
    </div>
  )
}

export default Comment