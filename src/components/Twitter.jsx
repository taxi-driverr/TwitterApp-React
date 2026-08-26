import { useState } from 'react';
import AddTweet from './AddTweet';
import TweetList from './TweetList'; 


const initialDummyTweets = [
{ id: 0, content: 'we have a new twitter called as threads', likeCount: 0 },
{ id: 1, content: 'What should we post?', likeCount: 0 },
{ id: 2, content: 'what is up with tech community?', likeCount: 0 }
];

function Twitter(){
const[tweets, setTweets] = useState(initialDummyTweets);
const handleAddTweet = (text) => {
    setTweets([...tweets, { 
        id: tweets.length, 
        content: text,
        likeCount: Math.floor(Math.random() * 10) 
    }]);
}
return (
    <div>
        <AddTweet onAddTweet={handleAddTweet} />
        < TweetList tweets={tweets} />
    </div>
 )
}
export default Twitter;
