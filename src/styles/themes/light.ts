import { DefaultTheme } from 'styled-components'
import { COLORS, GRAY_SCALE, COLORS_GRADIENTS } from 'styles/variables'

const themeLight: DefaultTheme = {
  mode: 'light',
  backgroundColor: GRAY_SCALE.white,
  fontColor: COLORS.darkBlueNight,
  colors: {
    primary: COLORS.blue,
    secondary: COLORS.blueGray,
    info: COLORS.cyan,
    warning: COLORS.yellow,
    danger: COLORS.red,
    success: COLORS.green,
    light: GRAY_SCALE.gray100,
    dark: GRAY_SCALE.gray900,
    buttonToogleIcon: COLORS.blue,
    link: COLORS.blue,
    border: GRAY_SCALE.gray400,
    backgroundColor: GRAY_SCALE.white,
    backgroundContent: GRAY_SCALE.white,
    boxShadow: 'rgb(140 152 164 / 35%) 0px 3px 6px 0px'
  },
  gradients: {
    one: COLORS_GRADIENTS.gradientLight
  }
}

export default themeLight
