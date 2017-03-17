import React, { Component } from 'react'
import { Flex, Box } from 'reflexbox'
import { Button } from '../../utils'
import styles from './navigation-small.styles'

class NavigationSmall extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openMenu: false,
      hamburgerState: '',
      showMenu: 'none',
    }
  }
  openMenu = () => {
    this.setState({
      openMenu: true,
      hamburgerState: 'open',
      showMenu: 'block',
    })
    if (this.state.openMenu) {
      this.setState({
        openMenu: false,
        hamburgerState: ' ',
        showMenu: 'none',
      })
    }
  }
  render() {
    return (
      <div>
        <Flex col={12} sm={12} style={styles.navigationBeam} justify="flex-end" wrap>
          <button
            onClick={this.openMenu}
            style={styles.hamburgerButton}
            id="nav-hamburger"
            className={this.state.hamburgerState}
          >
            <span />
            <span />
            <span />
          </button>
        </Flex>
        <Box col={12} sm={12} style={{ margin: 'auto', display: this.state.showMenu }}>
          <Button style={{ width: '100%' }}>Strona Główna</Button>
          <Button style={{ width: '100%' }}>O nas</Button>
          <Button style={{ width: '100%' }}>Wyszukiwarka</Button>
          <Button style={{ width: '100%' }}>Zaloguj</Button>
          <Button style={{ width: '100%' }}>Zarejestruj</Button>
        </Box>
      </div>
    )
  }
}

export default NavigationSmall
