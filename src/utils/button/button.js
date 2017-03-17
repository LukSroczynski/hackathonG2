import React from 'react'
import Radium from 'radium'
import stylePropType from 'react-style-proptype'
import styles from './button.styles'

function Button({ style, children }) {
  return (
    <button
      style={{
        ...styles.buttonStyle,
        ...style,
      }}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  style: {},
}

Button.propTypes = {
  children: React.PropTypes.node.isRequired,
  style: stylePropType,
}

export default Radium(Button)
