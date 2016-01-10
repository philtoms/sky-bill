import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import { Tabset, Tab } from 'components/ux/Tabset'

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function findClassInRenderedTree(rendered, cls) {
  return TestUtils.findAllInRenderedTree(rendered, function(el){
    return el.className && ~el.className.indexOf(cls)
  })
}

function findClassInReactId(rendered, id, cls) {
  return TestUtils.findAllInRenderedTree(rendered, function(el){
    return el.dataset && ~el.dataset.reactid.indexOf(id) && el.className && ~el.className.indexOf(cls)
  })
}

describe('(UX Component) Tabset', function () {
  let _component, _rendered, _tab, _tab1, _btn

  beforeEach(function () {
    _tab = <Tab>{['title','content']}</Tab>
    _component = shallowRender(<Tabset>{[_tab,_tab]}</Tabset>)
    _rendered = TestUtils.renderIntoDocument(<Tabset>{[_tab,_tab]}</Tabset>)
    _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')[1]
  })

  it('Should take array of rendered tabs as props', function () {
    expect(_component.props.children.length).to.equal(2)
  })

  it('Should set active tab', function () {
    const active = findClassInRenderedTree(_rendered, 'active')
    expect(active.length).to.equal(2)
  })

  it('Should switch active tab', function () {
    TestUtils.Simulate.click(_btn)
    const active = findClassInReactId(_rendered, 'tab2', 'active')
    expect(active.length).to.equal(2)
  })

})

describe('(UX Component) Tabset - Tab', function () {

  it('Should take array of elements as props', function () {
    const component = shallowRender(<Tab>{['title','content']}</Tab>)
    expect(component.props.children.length).to.equal(2)
  })

  it('Should render a tab item object', function () {
    const component = shallowRender(<Tab>{['title','content']}</Tab>)
    expect(component.props.children[0]).to.equal('title')
    expect(component.props.children[1]).to.equal('content')
  })

})
