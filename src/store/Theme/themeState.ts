import themeLight from 'styles/themes/light'
import themeDark from 'styles/themes/dark'
import { DefaultTheme } from 'styled-components'

export type StateThemeType = {
  modeTheme: DefaultTheme,
  navMain: { isOpen: boolean}
}

function getCurrentTheme () {
  const modeThemLocalStorage = window.localStorage.getItem('themeMode')

  if (modeThemLocalStorage) {
    return modeThemLocalStorage === 'light' ? themeLight : themeDark
  }

  return themeLight
}

const stateThemeInitial: StateThemeType = {
  modeTheme: getCurrentTheme(),
  navMain: { isOpen: false }
}

export { stateThemeInitial }
