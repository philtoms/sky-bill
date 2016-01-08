import Table from './ux/Table'

export default function SkyStore (props) {
  return (
    <div className='container text-center'>
      <h2>Sky Store</h2>
      <h3>Rentals</h3>
      <Table {...props.rentals} />
      <h3>Buy and Keep</h3>
      <Table {...props.buyAndKeep} />
      <p>Total {props.total}</p>
    </div>
  )
}
