import FeedbackItem from "./components/FeedbackItem"
import Header from "./components/Header"
import FeedbackData from "./data/FeedbackData"
import { useState } from 'react'
import FeedbackList from "./components/FeedbackList"


function App () {

  const [feedback, setFeedback] = useState(FeedbackData)

  return (
    <>
    <Header text= {true}/>
    
    <div className="container">
<FeedbackList feedback={feedback}/>   </div>
    </>

  )
}

export default App 