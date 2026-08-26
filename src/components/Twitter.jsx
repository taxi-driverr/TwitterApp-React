import { useState, useCallback, memo } from 'react';
import AddTweet from './AddTweet';
import TweetList from './TweetList'; 


const initialDummyTweets = [
{ id: 0, content: 'we have a new twitter called as threads', likeCount: 0, createdAt: new Date() },
{ id: 1, content: 'What should we post?', likeCount: 0, createdAt: new Date() },
{ id: 2, content: 'what is up with tech community?', likeCount: 0, createdAt: new Date() }
];

const MemoizedAddTweet = memo(AddTweet);

function Twitter(){
const[tweets, setTweets] = useState(initialDummyTweets);
const handleAddTweet = useCallback((text) => {
    setTweets([...tweets, { 
        id: tweets.length, 
        content: text,
        likeCount: Math.floor(Math.random() * 10),
        createdAt: new Date()
    }]);
},[tweets]);

const handleEditTweet = useCallback((tweet) => {
    setTweets(
        tweets.map((currentTweet) => {
            if(currentTweet.id === tweet.id){
                return tweet;
            }else{
                return currentTweet;
            }
        })
    )
},[tweets]);

const sortTweets = useCallback(() => {
    tweets.sort((t1, t2) => t2.createdAt.getTime() - t1.createdAt.getTime());
    setTweets([...tweets]);
},[tweets]);
return (
    <div>
        <MemoizedAddTweet onAddTweet={handleAddTweet}  />
        <button onClick={sortTweets}>Sort Tweet by createdAt</button>
        <TweetList tweets={tweets} onEditTweet={handleEditTweet} />
    </div>
 )
}
export default Twitter;
