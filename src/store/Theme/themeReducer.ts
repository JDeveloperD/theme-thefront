import THEME_TYPES from './themeTypes'
import themeDark from 'styles/themes/dark'
import themeLight from 'styles/themes/light'
import { StateThemeType } from './themeState'

const themeReducer = (state: StateThemeType, action) => {
  const { modeTheme } = state
  const { type } = action

  switch (type) {
    case THEME_TYPES.THEME_TOGGLE_MODE:
      return {
        ...state,
        modeTheme: modeTheme.mode === 'light' ? themeDark : themeLight
      }
    case THEME_TYPES.THEME_TOGGLE_NAV_MAIN:
      return {
        ...state,
        navMain: { isOpen: !state.navMain.isOpen }
      }
    default:
      return state
  }
}

export default themeReducer
