import Table from './ux/Table'
import styles from './CostTable.scss'
import { toArray } from '../utils'

export default function CostTable (props) {

  const values = toArray(props).map(c => ({...c, cost: '£' + c.cost.toFixed(2)}))

  return <Table className={styles['cost-table']} {...values}/>
}