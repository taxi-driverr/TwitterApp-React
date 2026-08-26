import { useState } from 'react';
import AddTweet from './AddTweet';
import TweetList from './TweetList'; 


const initialDummyTweets = [
{ id: 0, content: 'we have a new twitter called as threads', likeCount: 0, createdAt: new Date() },
{ id: 1, content: 'What should we post?', likeCount: 0, createdAt: new Date() },
{ id: 2, content: 'what is up with tech community?', likeCount: 0, createdAt: new Date() }
];

function Twitter(){
const[tweets, setTweets] = useState(initialDummyTweets);
const handleAddTweet = (text) => {
    setTweets([...tweets, { 
        id: tweets.length, 
        content: text,
        likeCount: Math.floor(Math.random() * 10),
        createdAt: new Date()
    }]);
}

const handleEditTweet = (tweet) => {
    setTweets(
        tweets.map((currentTweet) => {
            if(currentTweet.id === tweet.id){
                return tweet;
            }else{
                return currentTweet;
            }
        })
    )
}
return (
    <div>
        <AddTweet onAddTweet={handleAddTweet}  />
        <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
    </div>
 )
}
export default Twitter;
