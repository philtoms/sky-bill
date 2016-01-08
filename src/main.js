import { createHistory, useBasename } from 'history'
import { pushPath, syncReduxAndRouter } from 'redux-simple-router'
import routes from './routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'

import { actions } from './redux/modules/skyBill'

const history = useBasename(createHistory)({
  basename: __BASENAME__
})

const store = configureStore({
  skyBill: {
    statement: {period: {}},
    package: {subscriptions: []},
    callCharges: {calls: []},
    skyStore: {},
    total: 0
  },
  ux: {tabSet: {page: 1}}
})

// bootstrap the app. In this simple test, app state goes immediately to show bill
store.dispatch(actions.fetchCustomerBill()).then(function () {
  store.dispatch(pushPath('/bill'))
})

syncReduxAndRouter(history, store, (state) => state.router)

// Render the React application to the DOM
ReactDOM.render(
  <Root history={history} routes={routes} store={store} />,
  document.getElementById('root')
)
