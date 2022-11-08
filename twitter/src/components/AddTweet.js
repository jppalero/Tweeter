import { useState } from 'react'
import React from 'react'

const AddTweet = ({ onAdd }) => {
  const [user, setUser] = useState('')
  const [tweet, setTweet] = useState('')

  const onSubmit = (e) => {
    e.preventDefault() //doesnt actaully submit to a page

    if (!user) {
      alert('Please add a user')
      return
    }

    //pass data
    onAdd({ user, tweet })

    //clear form
    setUser('')
    setTweet('')
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
        <label>Tweet</label>
        <input
          type='text'
          placeholder='Tweet Away...'
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />
      </div>

      <input type='submit' value='Save Tweet' className='btn btn-block' />
    </form>
  )
}

export default AddTweet