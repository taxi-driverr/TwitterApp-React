import { useState } from "react";

function AddTweet({onAddTweet}) {
  const[text, setText] = useState('');
return (
<>
  <input type="text" 
  placeholder="Write a new tweet..."
  value={text}
  onChange={(e) => setText(e.target.value)}
 />
    
   <button onClick={() => {
    onAddTweet(text);
    setText('')
    }}>Add Tweet</button>
</>
)
}
export default AddTweet;