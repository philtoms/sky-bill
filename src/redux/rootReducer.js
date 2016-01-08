import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import ux from './modules/ux'
import skyBill from './modules/skyBill'

export default combineReducers({
  ux,
  skyBill,
  router
})
