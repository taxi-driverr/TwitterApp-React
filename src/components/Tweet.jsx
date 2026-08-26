import { useState } from "react";
import "../CSS/Tweet.css"
function Tweet({tweetId, content, likeCount, createdAt, onEdit}) {
  
  const[isEditing, setIsEditing] = useState(false);
    return(
       <div className="tweet-wrapper">
        <div className="tweet-content-edit-btn-wrapper">
          <div className="tweet-content">
              {isEditing ? 
              <input 
                type="text" 
                value={content} 
                onChange={(e)=>onEdit({id:tweetId, 
                  content:e.target.value,
                  createdAt:createdAt,
                  likeCount:likeCount})}
              /> : content}
          </div>
          <div className="tweet-edit-btn-wrapper">
              <button className="tweet-edit-btn" onClick={() => setIsEditing(!isEditing)}>
                  {isEditing ? 'Save' : 'Edit'}
              </button>
          </div>
        </div>
       

        <div className="tweet-likes-createdAt-wrapper">
          <div className="likes">
            {likeCount} likes
          </div>
          <div className="created-at">
            <b>Tweeted at:</b> {createdAt}
          </div>
        </div>

       </div>
    )
}

export default Tweet;