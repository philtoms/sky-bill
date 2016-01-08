import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const TAB_PAGE = 'TAB_PAGE'

// ------------------------------------
// Actions
// ------------------------------------
const tabPage = createAction(TAB_PAGE, (page = 1) => page)

export const actions = {
  tabPage
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [TAB_PAGE]: (state, { payload }) => Object.assign({}, state, {tabSet: {page: payload}})
}, 1)
