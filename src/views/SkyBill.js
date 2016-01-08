import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions } from '../redux/modules/skyBill'
import styles from './skyBill.scss'

const mapStateToProps = (state) => ({
  counter: state.counter
})

class SkyBill extends React.Component {

  static propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
  };

  render () {
    return (
      <div className='container text-center'>
        <h1>Your Sky Bill</h1>
        <h2>
          Sample Counter:&nbsp;
          <span className={styles['counter--green']}>{this.props.counter}</span>
        </h2>
        <button className='btn btn-default'
                onClick={() => this.props.increment(1)}>
          Increment
        </button>
        <button className='btn btn-default'
                onClick={this.props.doubleAsync}>
          Double (Async)
        </button>
        <hr />
        <Link to='/about'>Go To About View</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(SkyBill)
