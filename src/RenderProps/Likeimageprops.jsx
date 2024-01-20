import React from 'react'
import Counter from './Counter'

const Likeimageprops = () => {
    return (
      
      <Counter
        render={({ count, inc}) => (
          <div>
            <button onClick={inc}>LikeImage {count}</button>
          </div>
        )}
      />
    );
  };


export default Likeimageprops