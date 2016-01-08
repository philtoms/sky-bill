import { Link } from 'react-router'

export class AboutView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <h1>This is the about view!</h1>
        <hr />
        <Link to='/bill'>Back To Your Statement Details</Link>
      </div>
    )
  }
}

export default AboutView
