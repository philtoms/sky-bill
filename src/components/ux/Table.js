export default function Table (data) {
  data = {}.toString.call(data) === 'Array' ? data : Object.keys(data).map(k => data[k])
  const keys = data.length ? Object.keys(data[0]) : data

  return (
    <table>
      <thead>
        {keys.map(h => <th>{h}</th>)}
      </thead>
      <tbody>
        {data.map(b => {
          return <tr>
            {keys.map(h => <td>{b[h]}</td>)}
          </tr>
        })}
      </tbody>
    </table>
  )
}
