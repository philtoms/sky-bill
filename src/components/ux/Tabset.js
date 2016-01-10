import styles from './Tabset.scss'

export class Tabset extends React.Component {

  static propTypes = {
    childern: React.PropTypes.array,
    error: React.PropTypes.bool,
    active: React.PropTypes.bool
  };

  constructor () {
    super()
    this.state = {active: 1}
  }

  onClick (idx) {
    this.setState({active: idx})
  }

  render () {
    const tabs = this.props.children
    const active = this.props.error || this.state.active || this.props.active
    return (
      <div className={styles.tabset}>
        <ul>
        {tabs.map((tabItem, i) => {
          const idx = i + 1
          // take the 1st element as tab
          const tab = tabItem.props.children[0]
          return <li key={'tab' + idx} className={active === idx ? styles.active : null}>
            <button type='button' onClick={this.onClick.bind(this, idx)}>{tab}</button>
          </li>
        })}
        </ul>
        <div>
          {tabs.map((tabItem, i) => {
            const idx = i + 1
            // take the last element as tab page item
            const item = tabItem.props.children[1]
            return <section key={'tab' + idx}className={active === idx ? styles.active : null}>{item}</section>
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
