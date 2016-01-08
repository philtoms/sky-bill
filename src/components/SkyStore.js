import Table from './ux/Table'
import styles from 'views/skyBill.scss'

export default function SkyStore (props) {
  const { total = 0 } = props
  const buyAndKeep = props.buyAndKeep.map( c => ({...c, cost: '£'+c.cost.toFixed(2)}))
  const rentals = props.rentals.map( c => ({...c, cost: '£'+c.cost.toFixed(2)}))

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
