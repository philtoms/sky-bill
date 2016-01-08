import Table from './ux/Table'
import styles from 'views/skyBill.scss'

export default function Package (props) {
  const { total = 0 } = props
  const subscriptions = props.subscriptions.map( c => ({...c, cost: '£'+c.cost.toFixed(2)}))

  return (
    <div>
      <h3>Subscriptions</h3>
      <Table {...subscriptions} />
      <p className={styles.total}>Subtotal: &pound;{total.toFixed(2)}</p>
    </div>
  )
}
