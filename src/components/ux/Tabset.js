class Tabset extends React.Component {

  static propTypes = {
    childern: React.PropTypes.array,
    error: React.PropTypes.bool,
    active: React.PropTypes.bool
  };

  constructor () {
    super()
    this.state = {active: false}
  }

  onClick (i) {
    this.setState({active: i + 1})
  }

  render () {
    const tabs = this.props.children
    const active = this.props.error || this.state.active || this.props.active
    return (
      <div className='tabset'>
        <ul>
        {tabs.map((tabItem, i) => {
          // take the nth-1 elements as tab
          const tab = tabItem.props.children.slice(0, -1)
          return <li key={'tab' + i} className={active === i + 1 ? 'tabset--active' : null}>
            <button type='button' onClick={this.onClick.bind(this, i)} className='btn--tab'>{tab}</button>
          </li>
        })}
        </ul>
        <div>
          {tabs.map((tabItem, i) => {
            // take the last element as tab page item
            const item = tabItem.props.children.slice(-1)
            return <section key={'tab' + i}className={active === i + 1 ? 'tabset--active' : null}>{item}</section>
          })}
        </div>
      </div>
    )
  }
}

export class Tab extends React.Component {
  static propTypes = {
    childern: React.PropTypes.object
  };

  render () {
    return <div>{this.props.children}</div>
  }
}

export default Tabset
