/* global document */
/* exported styles */
/* global window */

import React from 'react'
import { StyleRoot } from 'radium';
import { render } from 'react-dom'
import { Router, Route, Redirect, browserHistory, IndexRoute } from 'react-router'
import Navigation from './layout/navigation/navigation'

// eslint-disable-next-line no-unused-vars
import styles from './app.css'

render(
  <StyleRoot>
    <Router history={browserHistory} onUpdate={scrollToTop}>
      <Route path="/" >
        <IndexRoute component={Navigation} />
        <Route path="contact" component={Navigation} />
        <Redirect from="*" to="/" />
      </Route>
    </Router>
  </StyleRoot>,
  document.getElementById('root'),
)

function scrollToTop() {
  window.scrollTo(0, 0)
}
