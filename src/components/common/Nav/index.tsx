import {
  NavList,
  NavFooter,
  NavHeader,
  NavContainer,
  NavOverlay,
  NavWrapper
} from './nav.styled'
import NavItem, { PropsNavItem } from './NavItem'
import { Button } from 'components/ui'
import { FC, useContext } from 'react'
import logo from 'assets/logos/logo.svg'
import logoNegative from 'assets/logos/logo-negative.svg'
import { ThemeContext, TYPE_THEME } from 'store/Theme'
import { Link } from 'react-router-dom'

export type PropsNav = {
  items: Array<PropsNavItem>
}

const Nav: FC<PropsNav> = ({ items }) => {
  const [storeTheme, dispatchTheme] = useContext(ThemeContext)
  const { modeTheme, navMain } = storeTheme

  return (
    <NavWrapper className={navMain.isOpen ? 'active' : ''}>
      <NavOverlay onClick={() => dispatchTheme({ type: TYPE_THEME.THEME_TOGGLE_NAV_MAIN })}></NavOverlay>
      <NavContainer>
        <NavHeader>
          <Link to="/">
            {modeTheme.mode === 'light'
              ? (
              <img src={logo} alt="Theme Name" />
                )
              : (
              <img src={logoNegative} alt="Theme Name" />
                )}
          </Link>
        </NavHeader>
        <NavList>
          {items?.map((item, index) => (
            <NavItem key={index} to={item.to} subItems={item.subItems} text={item.text} />
          ))}
        </NavList>
        <NavFooter>
          <Button to="/about" type="stroke">Documentation</Button>
          <Button>Purchase now</Button>

        </NavFooter>
      </NavContainer>
    </NavWrapper>
  )
}

export default Nav
