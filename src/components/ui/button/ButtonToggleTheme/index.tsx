import { useContext } from 'react'
import { ThemeContext, TYPE_THEME } from 'store/Theme'
import { Moon, Sun } from 'components/icons'
import { ButtonToggleContainer } from './buttonToggle.styled'

const ButtonToggleTheme = () => {
  const [storeTheme, dispatchTheme] = useContext(ThemeContext)
  const { modeTheme } = storeTheme

  return (
    <ButtonToggleContainer onClick={() => dispatchTheme({ type: TYPE_THEME.THEME_TOGGLE_MODE })}>
      {modeTheme.mode === 'light'
        ? (
          <Moon />
          )
        : (
          <Sun />
          )
      }
    </ButtonToggleContainer>
  )
}

export default ButtonToggleTheme
