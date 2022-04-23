import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'
import {FaTimes} from 'react-icons/fa'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackConext';





function FeedbackItem({item}) {

  const {deleteFeedback} = useContext(FeedbackContext)

 

 const handleClick = (id) => {
console.log(id );
 }

  return (
    <Card >
            <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={handleClick}>click</button> */}

    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem