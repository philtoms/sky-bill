import Table from './ux/Table'

export default function Package (props) {
  return (
    <div className='container text-center'>
      <Table {...props.subscriptions} />
      <p>Total {props.total}</p>
    </div>
  )
}
