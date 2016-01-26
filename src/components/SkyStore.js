import Table from './CostTable'
import styles from 'views/skyBill.scss'

export default function SkyStore (props) {

  const { buyAndKeep, rentals, total = 0 } = props

  return (
    <div>
      <h3>Rentals</h3>
      <Table {...rentals} />
      <h3>Buy and keep</h3>
      <Table {...buyAndKeep} />
      <p className={styles.total}>Subtotal: &pound;{total.toFixed(2)}</p>
    </div>
  )
}
