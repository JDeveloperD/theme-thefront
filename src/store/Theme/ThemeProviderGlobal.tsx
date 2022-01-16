import { FC, useContext, useReducer } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'styles'
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
  const [storeTheme] = useContext(ThemeContext)
  const { modeTheme } = storeTheme

  return (
    <ThemeProvider theme={modeTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default ThemeProviderGlobal
