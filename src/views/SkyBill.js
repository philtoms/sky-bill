import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions } from '../redux/modules/ux'
import styles from './skyBill.scss'

const mapStateToProps = (state) => ({
  counter: state.counter
})

export class SkyBill extends React.Component {

  static propTypes = {
    tabPage: React.PropTypes.func
  };

  render () {
    return (
      <div className='container text-center'>
        <h1>Your Latest Sky Bill</h1>
        <button className='btn btn-default'
                onClick={() => this.props.tabPage(1)}>
          Increment
        </button>
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(SkyBill)
