import { connect } from 'react-redux'
import { actions } from '../redux/modules/ux'

import styles from './skyBill.scss'
import Package from '../components/Package'
import CallCharges from '../components/CallCharges'
import SkyStore from '../components/SkyStore'
import Statement from '../components/Statement'

import { Tabset, Tab } from '../components/ux/Tabset'

const mapStateToProps = (state) => ({
  bill: state.skyBill,
  active: state.ux.tabSet.page
})

export class SkyBill extends React.Component {

  static propTypes = {
    bill: React.PropTypes.object.isRequired,
    tabPage: React.PropTypes.func.isRequired,
    active: React.PropTypes.number.isRequired
  };

  render () {
    const { active, bill, tabPage } = this.props

    return (
      <div className={styles.skyBill + ' container text-center'}>
        <h1>Your Latest Sky Bill</h1>
        <Statement {...bill.statement} total={bill.total}/>
        <Tabset active={active} page={tabPage}>
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
