import { createAction, handleActions } from 'redux-actions'
import { checkResponseStatus, parseJSON } from '../../utils'

// ------------------------------------
// Constants
// ------------------------------------
const CUSTOMER_BILL = 'CUSTOMER_BILL'

// ------------------------------------
// Actions
// ------------------------------------

const updateCustomerBill = createAction(CUSTOMER_BILL)

const fetchCustomerBill = () => {
  return dispatch => {
    return window.fetch('https://still-scrubland-9880.herokuapp.com/bill.json')
      .then(checkResponseStatus)
      .then(parseJSON)
      .then(function (data) {
        dispatch(updateCustomerBill(data))
      }).catch(function (ex) {
        console.log('request failed', ex)
      })
  }
}

export const actions = {
  fetchCustomerBill
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [CUSTOMER_BILL]: (state, { payload }) => payload
}, 1)
