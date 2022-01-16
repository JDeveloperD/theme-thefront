import THEME_TYPES from './themeTypes'
import themeDark from 'styles/themes/dark'
import themeLight from 'styles/themes/light'
import { StateThemeType } from './themeState'

interface IAction {
  type?: string,
  payload: any
}

const themeReducer = (state: StateThemeType, action: IAction) => {
  const { modeTheme } = state
  const { type, payload } = action

  switch (type) {
    case THEME_TYPES.THEME_TOGGLE_MODE:
      window.localStorage.setItem('themeMode', modeTheme.mode === 'light' ? 'dark' : 'light')

      return {
        ...state,
        modeTheme: modeTheme.mode === 'light' ? themeDark : themeLight
      }
    case THEME_TYPES.THEME_TOGGLE_NAV_MAIN:
      return {
        ...state,
        navMain: { ...state.navMain, isOpen: !state.navMain.isOpen }
      }
    default:
      return state
  }
}

export default themeReducer
