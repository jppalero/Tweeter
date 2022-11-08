// Comments
import React from 'react'
import Comment from './Comment'

const Comments = ({ comments }) => {

  return (
    <>
      {comments.map((comment, index) => (
        <Comment key={index} comment={comment}/>
      ))}
    </>
  )
}

export default Comments