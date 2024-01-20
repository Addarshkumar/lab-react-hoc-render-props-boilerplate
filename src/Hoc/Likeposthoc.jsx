import React from 'react'
import HOC from './HOC'

const Likeposthoc = ({inc,count}) => {
    return (
        <div>
          <button onClick={inc}>Like Post {count}</button>
        </div>
      )
}

export default HOC(Likeposthoc)