import Tweet from "./Tweet";
import "../CSS/TweetList.css"
function TweetList({tweets, onEditTweet}) {
    return(
       
        <ul className="tweet-list">
            {
                tweets.map((tweet) => {
                    return(
                        <li className="tweet-list-item" key={tweet.id}>
                            <Tweet 
                            tweetId = {tweet.id} 
                            content={tweet.content} 
                            likeCount={tweet.likeCount} 
                            createdAt={tweet.createdAt.toString()} 
                            onEdit={onEditTweet} />
                        </li>
                    )
                })
            }
        </ul>
       
    )
}
export default TweetList;