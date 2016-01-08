import { Route, IndexRoute } from 'react-router'

import CoreLayout from 'layouts/CoreLayout'
import SkyBill from 'views/SkyBill'
import AboutView from 'views/AboutView'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={SkyBill} />
    <Route path='/about' component={AboutView} />
  </Route>
)
