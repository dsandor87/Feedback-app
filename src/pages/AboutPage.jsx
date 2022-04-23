
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage(props) {
  return (
    <Card>
      <div className='about'>
        <h1>About The Project</h1>
        <p>        This App allows users to add, update and delete feedback. It uses a mock REST api with json-server.</p>

<p>This project goes over all of the fundamentals of React including:</p>

<ul>
  <li>Components</li>
  <li>JSX</li>
  <li>Props (proptypes, defaultprops, etc)</li>
  <li>State (Component & App Level)</li>
  <li>Styling</li>
  <li>Handling Events</li>
  <li>Lists & Keys</li>
  <li>Forms</li>
  <li>Context API</li>
  <li>HTTP Requests </li>

  </ul>

        <p>
          <Link to={{pathname :'/'}}>Back To Home</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage