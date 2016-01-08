import Table from './ux/Table'
import styles from 'views/skyBill.scss'

export default function CallCahrges (props) {
  const { total = 0 } = props
  const calls = props.calls.map( c => ({...c, cost: '£'+c.cost.toFixed(2)}))

  return (
    <div>
      <h3>Calls</h3>
      <Table {...calls} />
      <p className={styles.total}>Subtotal: &pound;{total.toFixed(2)}</p>
    </div>
  )
}
