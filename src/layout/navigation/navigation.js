import React from 'react'
import Radium from 'radium'
import NavigationBig from '../navigation-big/navigation-big'
import NavigationSmall from '../navigation-small/navigation-small'
import styles from './navigation.styles'
/* global window */

let windowSize = window.innerWidth < 764;
function Navigation() {
  return (
    <div style={styles.navigationBar}>
      {
        windowSize ?
          <NavigationSmall />
        :
          <NavigationBig />
      }
    </div>
  )
}
export default Radium(Navigation)