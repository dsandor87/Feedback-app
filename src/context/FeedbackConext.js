import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children})=>  {

  const [isLoading, setIsLoading] = useState(false)
  const [feedback, setFeedback] = useState([])

const [feedbackEdit, setFeedbackEdit] = useState({
  item: {},
  edit: false,
})
useEffect(() => {
  setIsLoading(true)
  fetchFeedback()
  setIsLoading(false)
}, [])

const url = 'http://localhost:5000'

// Fetch feedback
const fetchFeedback = async () => {
  const response = await fetch(
    `/feedback?_sort=id&_order=desc`
  )
  const data = await response.json()

  setFeedback(data)
}

// Delete feedback
const deleteFeedback = async (id) => {
  if (window.confirm('Are you sure you want to delete?')) {
    await fetch(`/feedback/${id}`, { method: 'DELETE' })

    setFeedback(feedback.filter((item) => item.id !== id))
  }
}

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }


  const addFeedback = async (newFeedback) => {
    const response = await fetch(`${url}/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
  }

  const updateFeedback = (id ,updItem ) => {
setFeedback(feedback.map((item)=>item.id === id ? {...item, ...updItem}: item))

  }

  return <FeedbackContext.Provider value={{
    feedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    feedbackEdit,
    updateFeedback,
    isLoading
  }}>
    {children}
  </FeedbackContext.Provider>

}

export default FeedbackContext