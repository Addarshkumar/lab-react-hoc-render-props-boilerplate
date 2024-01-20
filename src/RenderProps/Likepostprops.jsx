import React from 'react'
import Counter from './Counter'

const LikePostprops = () => {
    return (
      <Counter
        render={({ count, inc}) => (
          <div>
            <button onClick={inc}>LikePost {count}</button>
          </div>
        )}
      />
    );
  };


export default LikePostprops