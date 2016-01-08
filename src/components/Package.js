import Table from './ux/Table'

export default function Package (props) {
  return (
    <div className='container text-center'>
      <h2>Subscriptions</h2>
      <Table {...props.subscriptions} />
      <p>Total {props.total}</p>
    </div>
  )
}
