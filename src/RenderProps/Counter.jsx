import React, { useState } from 'react'

const Counter = ({render}) => {
    const[count,setCount]=useState(0);
    const inc=()=>{
        setCount(count+1);
    }
  return (
    render({count,inc})
  )
}

export default Counter