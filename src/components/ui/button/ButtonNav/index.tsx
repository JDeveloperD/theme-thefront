import { useContext, FC } from 'react'
import { MenuLight } from 'components/icons'
import { ButtonNavContainer } from './buttonNav.styled'
import { ThemeContext, TYPE_THEME } from 'store/Theme'
const ButtonNav: FC = () => {
  const [storeTheme, dispatchTheme] = useContext(ThemeContext)
  return (
    <ButtonNavContainer onClick={() => dispatchTheme({ type: TYPE_THEME.THEME_TOGGLE_NAV_MAIN })}>
      <MenuLight />
    </ButtonNavContainer>
  )
}

export default ButtonNav
