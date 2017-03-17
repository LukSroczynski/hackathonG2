import { pxToRem } from '../variables/functions.styles'

const styles = {
  section: {
    padding: `${pxToRem(20)} ${pxToRem(12)}`,
    '@media (min-width: 30em)': {
      padding: `${pxToRem(30)} ${pxToRem(25)}`,
    },
    '@media (min-width: 48em)': {
      padding: `${pxToRem(55)} ${pxToRem(50)}`,
    },
    '@media (min-width: 60em)': {
      padding: `${pxToRem(75)} ${pxToRem(100)}`,
    },
    '@media (min-width: 78em)': {
      padding: `${pxToRem(75)} ${pxToRem(150)}`,
    },
  },
}

export default styles
