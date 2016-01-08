import Table from './ux/Table'

export default function CallCahrges (props) {
  return (
    <div className='container text-center'>
      <h2>Call Charges</h2>
      <h3>Calls</h3>
      <Table {...props.calls} />
      <p>Total {props.total}</p>
    </div>
  )
}
