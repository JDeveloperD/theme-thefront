import themeLight from 'styles/themes/light'
import { DefaultTheme } from 'styled-components'

export type StateThemeType = {
  modeTheme: DefaultTheme,
  navMain: { isOpen: boolean}
}

const stateThemeInitial: StateThemeType = {
  modeTheme: themeLight,
  navMain: { isOpen: false }
}

export { stateThemeInitial }
