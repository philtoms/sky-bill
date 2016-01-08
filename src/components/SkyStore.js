import Table from './ux/Table'
import styles from 'views/skyBill.scss'

export default function SkyStore (props) {
  const { buyAndKeep=[], rentals=[], total = 0 } = props
  const _buyAndKeep = buyAndKeep.map(c => ({...c, cost: '£' + c.cost.toFixed(2)}))
  const _rentals = rentals.map(c => ({...c, cost: '£' + c.cost.toFixed(2)}))

  return (
    <div>
      <h3>Rentals</h3>
      <Table {..._rentals} />
      <h3>Buy and keep</h3>
      <Table {..._buyAndKeep} />
      <p className={styles.total}>Subtotal: &pound;{total.toFixed(2)}</p>
    </div>
  )
}
