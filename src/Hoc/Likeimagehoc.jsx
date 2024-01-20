import React from 'react'
import HOC from './HOC'

const Likeimagehoc = ({inc,count}) => {
   return(
    <div>
    <button onClick={inc}>Like Image {count}</button>
  </div>
   )
}

export default HOC(Likeimagehoc);