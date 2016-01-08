import { connect } from 'react-redux'
import { Link } from 'react-router'
import { actions } from '../redux/modules/ux'
import moment from 'moment'

import styles from './skyBill.scss'
import Package from '../components/Package'
import CallCharges from '../components/CallCharges'
import SkyStore from '../components/SkyStore'
import Statement from '../components/Statement'

import Tabset, { Tab } from '../components/ux/Tabset'

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
      <div className={styles.skyBill + ' container text-center'}>
        <h1>Your Latest Sky Bill</h1>
        <Statement {...bill.statement} total={bill.total}/>
        <Tabset>
          <Tab>
            <h2>Packages</h2>
            <Package {...bill.package} />
          </Tab>
          <Tab>
            <h2>Call Charges</h2>
            <CallCharges {...bill.callCharges} />
          </Tab>
          <Tab>
            <h2>Sky Store</h2>
            <SkyStore {...bill.skyStore} />
          </Tab>
        </Tabset>
        <p className={styles.total}>Total: &pound;{bill.total.toFixed(2)}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps, actions)(SkyBill)
