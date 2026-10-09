import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(10);
  
  return (
    <button onClick={() => setLikes(likes + 1)}>
      Like: {likes}
    </button>
  )
}

function Example() {
  return (
    <div>
      <h1>My App</h1>
      <LikeButton />
    </div>
  );
}

export default Example;