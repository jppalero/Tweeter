import Header from "./components/Header";
import Tweets from "./components/Tweets";
import AddTweet from "./components/AddTweet";
import Button from './components/Button'

import { useState, useEffect } from 'react'
import AddComment from "./components/AddComment";
import Comments from "./components/Comments";

const App = () => {
  const https = require('https');
  //use state of our main page variables
  const [showAddTweet, setShowAddTweet] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showAddComment, setShowAddComments] = useState(false);
  const [tweetId, setTweetId] = useState('');
  const [tweets, setTweets] = useState([]);
  const [comments, setComments] = useState([]);

  //feature used to run something as soon as the page loads in our case load tweets
  // relaod --> get updated tweets
  useEffect(() => {
    const fetchTweets = async () => {
      const tweetsFromServer = await getTweets()
      setTweets(tweetsFromServer)
    }

    //call function above
    fetchTweets()
  }, []) //dependancy array if something changes

  //POST Tweet
  const postTweet = async (tweetData) => {

    console.log(`Posting tweet by ${tweetData.user} to db`);

    // const res = await fetch('http://localhost:3000/api/twitter', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({user: tweetData.user, tweet: tweetData.tweet}),
    // });

    return 200;
  }

  //POST Comment
  const postComment = async (comment) => {
    
    console.log(`Posting comment by ${comment.user} to db`);

    // const res = await fetch('http://localhost:3000/api/twitter/comments', {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //   },
    //   body: JSON.stringify({user: comment.user, comment: comment.comment, tweetId: comment.tweetId}),
    // });

    // return res;
    return 200
  }

  //GET Tweets
  const getTweets = async () => {
    console.log('Getting Tweets');
    // const res = await fetch('http://localhost:3000/api/twitter')
    // const data = await res.json()
    // console.log(data)

    //return data
    return [{
      id: 1,
      user: 'Pablo',
      tweet: 'Happy!'
    },
    {
      id: 2,
      user: 'JP',
      tweet: 'Groovy'
    }]
  }

  // GET Comments
  const getComments = async (id) => {
    console.log(`Getting Comments for tweet ${id}`);
    // const res = await fetch(`http://localhost:3000/api/twitter/comments/${id}`)
    // const data = await res.json()
    // return data
    return [{
      tweetId: 1,
      user: 'Pablo',
      Comment: 'Happy!'
    },
    {
      tweetId: 2,
      user: 'JP',
      Comment: 'Groovy'
    }]
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTweet(!showAddTweet)}
        showAdd={showAddTweet}
      />
      {showAddTweet && <AddTweet onAdd={postTweet} />}
      {showAddComment && <AddComment onAdd={postComment} />}
      {tweets.length > 0 ? (<Tweets tweets={tweets} showComments={() => setShowComments(!showComments)} addComment={() => setShowAddComments(!showAddComment)} tweetId={() => setTweetId()}/>): (<h4 className="empty"> Be the first to Tweet! </h4>)}
    </div>
  )
}

export default App;
