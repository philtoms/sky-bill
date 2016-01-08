import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import { SkyBill } from 'views/SkyBill'

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<SkyBill {...props} />)
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<SkyBill {...props} />)
}

describe('(View) SkyBill', function () {
  let _component, _rendered, _props, _spies

  beforeEach(function () {
    _spies = {}
    _props = {
      ...bindActionCreators({
        tabPage: (_spies.tabPage = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }

    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  })

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div')
  })

  it('Should include an <h1> with welcome text.', function () {
    const h1 = TestUtils.findRenderedDOMComponentWithTag(_rendered, 'h1')

    expect(h1).to.exist
    expect(h1.textContent).to.match(/Your Latest Sky Bill/)
  })

})
