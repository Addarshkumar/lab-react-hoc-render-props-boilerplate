import React, { useState } from 'react'

const HOC = (WrappedComponent) => {
    const newComponent=()=>{
        const[count,setCount]=useState(0);
        const handleInc=()=>{
            setCount(count+1);
        }
        return <WrappedComponent inc={handleInc} count={count} />
    }
    return newComponent
  
}

export default HOC