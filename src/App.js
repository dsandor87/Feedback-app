function App () {


const title = 'Blog Post'
const body =' gfgfgdg'
const comments = [
  {id:1, text:'hjkhjkgkgjkh'},
  {id:2, text:'hjkhjkgkgjkh'},
  {id:3, text:'hjkhjkgkgjkh'}

]

const loading = false
const showComments = false

if (loading) return <h1>Loading...</h1>

  return (

    <>

<h1>{title}</h1>
  <p>{body}</p>

  {showComments ? (<div>
    
    
    
    
    <h3> comments  {comments.length}</h3>

<ul>
  {comments.map((comment, index)=>(
    <li key={comment.id}>{comment.text}</li>
))}
</ul></div>):'no'}

  
    </>
   
  )
}

export default App 