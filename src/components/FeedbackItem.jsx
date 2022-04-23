import React from 'react'
import { useState } from 'react'



function FeedbackItem({item}) {
 

//  const handleClick = () => {
//    setRating((prev)=>{return  prev + 1 })

//  }

  return (
    <div className='card'>
            <div className='num-display'>{item.rating}</div>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={handleClick}>click</button> */}

    </div>
  )
}

export default FeedbackItem