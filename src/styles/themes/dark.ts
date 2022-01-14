import { DefaultTheme } from 'styled-components'
import { COLORS, GRAY_SCALE, COLORS_GRADIENTS } from 'styles/variables'

const themeDark: DefaultTheme = {
  mode: 'dark',
  backgroundColor: COLORS.darkBlue,
  fontColor: GRAY_SCALE.gray100,
  colors: {
    primary: COLORS.blue,
    secondary: GRAY_SCALE.gray500,
    info: COLORS.cyan,
    warning: COLORS.yellow,
    danger: COLORS.red,
    success: COLORS.green,
    light: GRAY_SCALE.gray200,
    dark: GRAY_SCALE.gray900,
    buttonToogleIcon: COLORS.yellow,
    link: GRAY_SCALE.gray100,
    border: GRAY_SCALE.gray800,
    navBackground: COLORS.blueNight,
    boxShadow: 'rgb(0 0 0 / 25%) 0px 3px 6px 0px'
  },
  gradients: {
    one: COLORS_GRADIENTS.gradientDark
  }
}

export default themeDark
