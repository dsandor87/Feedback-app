import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'




function FeedbackItem({item}) {
 

//  const handleClick = () => {
//    setRating((prev)=>{return  prev + 1 })

//  }

  return (
    <Card >
            <div className='num-display'>{item.rating}</div>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={handleClick}>click</button> */}

    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem