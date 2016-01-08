import { createAction, handleActions } from 'redux-actions'

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
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        dispatch(updateCustomerBill(json))
      }).catch(function (ex) {
        console.log('parsing failed', ex)
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
