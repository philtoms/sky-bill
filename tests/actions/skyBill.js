import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import reducer, { actions } from 'redux/modules/skyBill'

// mocks
let _fetch
function mockUp() {
  _fetch = window.fetch
  window.fetch = () => {
    return new Promise( (resolve, reject) => {
      resolve({json: () => ({"total": "136.79"})})
    })
  }
}

function mockDown() {
  window.fetch = _fetch
}

describe ('Actions (skyView)', function(){

  let _spies = {}

  beforeEach(function(){
    mockUp()
    _spies.dispatch = sinon.spy()
  })

  afterEach(function(){
    mockDown()
  })

  it( 'should fetch a valid bill', function(done){
    actions.fetchCustomerBill()(_spies.dispatch).then(function() {
      expect(_spies.dispatch.calledWith({type:'CUSTOMER_BILL', payload:{total:'136.79'}})).to.be.true
      done()
    })
  })

})