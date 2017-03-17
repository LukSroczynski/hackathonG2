import React from 'react'
import { Flex } from 'reflexbox'
import { Button } from '../../utils'


function NavigationBig() {
  return (
    <Flex col={12} sm={12} wrap>
      <Flex col={10} justify="flex-start">
        <Button>Strona Główna</Button>
        <Button>O nas</Button>
        <Button>Wyszukiwarka</Button>
      </Flex>
      <Flex col={2} justify="flex-end">
        <Button>Zaloguj</Button>
        <Button>Zarejestruj</Button>
      </Flex>
    </Flex>
  )
}

export default NavigationBig
