import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions } from '../redux/modules/ux'
import styles from './skyBill.scss'

import Package from '../components/Package'
import CallCharges from '../components/CallCharges'
import SkyStore from '../components/SkyStore'
import Statement from '../components/Statement'

const mapStateToProps = (state) => ({
  currentTab: state.ux.tabSet.page,
  bill: state.skyBill
})

export class SkyBill extends React.Component {

  static propTypes = {
    tabPage: React.PropTypes.func.isRequired,
    bill: React.PropTypes.object.isRequired,
    currentTab: React.PropTypes.number.isRequired
  };

  render () {
    const { bill, currentTab, tabPage } = this.props

    return (
      <div className='container text-center'>
        <h1>Your Latest Sky Bill</h1>
        <Statement {...bill.statement} total={bill.total}/>
        <Package {...bill.package} />
        <CallCharges {...bill.callCharges} />
        <SkyStore {...bill.skyStore} />

        <Link to='/about'>Go To About View</Link>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(SkyBill)
