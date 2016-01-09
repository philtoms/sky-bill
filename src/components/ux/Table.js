import styles from './Table.scss'
import { toArray } from '../../utils'

export default function Table (data) {

  const values = toArray(data)
  const keys = values.length ? Object.keys(values[0]) : []
  const tableClass = styles.table + (data.className? ' ' + data.className : '')

  return (
    <table className={tableClass}>
      <thead><tr>
      {keys.map(h => <th key={h}>{h}</th>)}
      </tr></thead>
      <tbody>
        {values.map((b,i) => {
          return <tr key={'r'+i}>
            {keys.map(h => <td key={h} >{b[h]}</td>)}
          </tr>
        })}
      </tbody>
    </table>
  )
}
