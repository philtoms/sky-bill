import moment from 'moment'

export default function Statement (statement) {
  return (
    <div>
      <h2>Statement</h2>
      <p>Statement generated {moment(statement.generated).format('DD MMM YY')}</p>
      <h2>Statement Period {moment(statement.period.from).format('DD MMM YY')} to {moment(statement.period.to).format('DD MMM YY')}</h2>
      <p className='total'>Total: &pound;{statement.total.toFixed(2)}</p>
      <p>Payment due {moment(statement.due).format('DD MMM YY')}</p>
    </div>
  )
}
