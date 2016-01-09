import Table from './CostTable'
import styles from 'views/skyBill.scss'

export default function Package (props) {

  const { subscriptions, total = 0 } = props

  return (
    <div>
      <h3>Subscriptions</h3>
      <Table {...subscriptions} />
      <p className={styles.total}>Subtotal: &pound;{total.toFixed(2)}</p>
    </div>
  )
}
