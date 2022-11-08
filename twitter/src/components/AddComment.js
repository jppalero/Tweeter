import { useState } from 'react'
import React from 'react'

const AddComment = ({ onAdd }) => {
  const [user, setUser] = useState('')
  const [comment, setComment] = useState('')
  const [tweetId, setTweetId] = useState('')

  const onSubmit = (e) => {
    e.preventDefault() //doesnt actaully submit to a page

    if (!user) {
      alert('Please add a user')
      return
    } 

    //pass data
    onAdd({ user, comment, tweetId })

    //clear form
    setUser('')
    setComment('')
    setTweetId('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>User</label>
        <input
          type='text'
          placeholder='Add UserName'
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Comment</label>
        <input
          type='text'
          placeholder='What do you think?'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>TweetId</label>
        <input
          type='text'
          placeholder='TweetId next to user'
          value={tweetId}
          onChange={(e) => setTweetId(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Comment' className='btn btn-block' />
    </form>
  )
}

export default AddComment