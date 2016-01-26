import Table from './CostTable'
import styles from 'views/skyBill.scss'

export default function CallCharges (props) {

  const { calls, total = 0 } = props

  return (
    <div>
      <h3>Calls</h3>
      <Table {...calls} />
      <p className={styles.total}>Subtotal: &pound;{total.toFixed(2)}</p>
    </div>
  )
}
