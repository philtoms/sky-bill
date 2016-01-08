import styles from './Table.scss'

export default function Table (data) {
  data = {}.toString.call(data) === 'Array' ? data : Object.keys(data).map(k => data[k])
  const keys = data.length ? Object.keys(data[0]) : data

  return (
    <table className={styles.table}>
      <thead><tr>
      {keys.map(h => <th key={h}>{h}</th>)}
      </tr></thead>
      <tbody>
        {data.map((b,i) => {
          return <tr key={'r'+i}>
            {keys.map(h => <td key={h} >{b[h]}</td>)}
          </tr>
        })}
      </tbody>
    </table>
  )
}
