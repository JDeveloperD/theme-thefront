import themeLight from 'styles/themes/light'
import themeDark from 'styles/themes/dark'
import { DefaultTheme } from 'styled-components'
import { PropsNavItem } from 'components/common/nav/NavItem'
import generalInfo from 'web-config/general-info.json'

const { nav } = generalInfo

export type StateThemeType = {
  modeTheme: DefaultTheme,
  navMain: {
    isOpen: boolean,
    items: Array<PropsNavItem>
  }
}

function getCurrentTheme () {
  const modeThemLocalStorage = window.localStorage.getItem('themeMode')

  if (modeThemLocalStorage) {
    return modeThemLocalStorage === 'light' ? themeLight : themeDark
  }

  return themeLight
}

export const stateThemeInitial: StateThemeType = {
  modeTheme: getCurrentTheme(),
  navMain: {
    isOpen: false,
    items: nav
  }
}
