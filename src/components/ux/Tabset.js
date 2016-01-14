import styles from './Tabset.scss'

export class Tabset extends React.Component {

  static propTypes = {
    active: React.PropTypes.number,
    childern: React.PropTypes.array,
    page: React.PropTypes.func.isRequired
  };

  render () {
    const{ active=1, children, page, tabs=children } = this.props
    return (
      <div className={styles.tabset}>
        <ul>
        {tabs.map((tabItem, i) => {
          const idx = i + 1
          // take the 1st element as tab
          const tab = tabItem.props.children[0]
          return <li key={'tab' + idx} className={active === idx ? styles.active : null}>
            <button type='button' onClick={page.bind(null,idx)}>{tab}</button>
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
