import React from 'react'
import Radium from 'radium'
import stylePropType from 'react-style-proptype'
import styles from './section.styles'

function Section({ children, style }) {
  return (
    <div style={{ ...styles.section, ...style }}>
      { children }
    </div>
  )
}
Section.defaultProps = {
  style: {},
}
Section.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: stylePropType,
}

export default Radium(Section)
