import React, { FC, useContext, useEffect, useReducer } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles'
import { TYPE_THEME } from '.'
import ThemeContext from './ThemeContext'
import themeReducer from './themeReducer'
import { stateThemeInitial } from './themeState'

const ThemeProviderGlobal: FC = ({ children }) => {
  const [storeTheme, dispatchTheme] = useReducer(themeReducer, stateThemeInitial)

  return (
    <ThemeContext.Provider
      value={[storeTheme, dispatchTheme]}
    >
      <ThemeStyledComponent>
        {children}
      </ThemeStyledComponent>
    </ThemeContext.Provider>
  )
}

const ThemeStyledComponent: FC = ({ children }) => {
  const [storeTheme, dispatchTheme] = useContext(ThemeContext)
  const { modeTheme } = storeTheme

  useEffect(() => {
    const nameModeTheme = window.localStorage.getItem('themeMode')
    console.log(nameModeTheme)
    dispatchTheme({ type: TYPE_THEME.THEME_TOGGLE_MODE, payload: nameModeTheme })
  }, [])

  return (
    <ThemeProvider theme={modeTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderGlobal
