/* global document */
/* exported styles */
/* global window */

import React from 'react'
import { StyleRoot } from 'radium';
import { render } from 'react-dom'
import { Router, Route, Redirect, browserHistory, IndexRoute } from 'react-router'
import Hello1 from './test1'
import Hello2 from './test2'

// eslint-disable-next-line no-unused-vars
import styles from './app.css'

render(
  <StyleRoot>
    <Router history={browserHistory} onUpdate={scrollToTop}>
      <Route path="/" >
        <IndexRoute component={Hello1} />
        <Route path="contact" component={Hello2} />
        <Redirect from="*" to="/" />
      </Route>
    </Router>
  </StyleRoot>,
  document.getElementById('root'),
)

function scrollToTop() {
  window.scrollTo(0, 0)
}
