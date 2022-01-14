import {
  NavList,
  NavFooter,
  NavHeader,
  NavContainer,
  NavOverlay,
  NavWrapper
} from './nav.styled'
import NavItem, { NavItemProps } from './NavItem'
import { Button } from 'components/ui'
import { ReactElement, FC, useContext } from 'react'
import logo from 'assets/logos/logo.svg'
import logoNegative from 'assets/logos/logo-negative.svg'
import { ThemeContext, TYPE_THEME } from 'store/Theme'
import { Link } from 'react-router-dom'

const navItems: Array<NavItemProps> = [
  {
    text: 'Landings',
    to: '/',
    subItems: [
      {
        text: 'Mobile App',
        to: '/about'
      },
      {
        text: 'Start Up',
        to: '/start-up'
      },
      {
        text: 'Marketing',
        to: '/marketing'
      },
      {
        text: 'Enterprise',
        to: '/enterprise'
      },
      {
        text: 'Design Company',
        to: '/design-company'
      },
      {
        text: 'Overview',
        to: '/overview'
      },
      {
        text: 'E-Learning',
        to: '/e-learning'
      },
      {
        text: 'Rental',
        to: '/rental'
      },
      {
        text: 'Logistics',
        to: '/logistics'
      }
    ]
  },
  {
    text: 'Company',
    to: '/company'
  },
  {
    text: 'Pages',
    to: '/pages',
    subItems: [
      {
        text: 'Help Center: Overview',
        to: '/help-center'
      },
      {
        text: 'Help Center Article',
        to: '/help-center-article'
      },
      {
        text: 'FAQ',
        to: '/faq'
      },
      {
        text: 'Error 404: Simple',
        to: '/error-404-simple'
      },
      {
        text: 'Error 404: Cover',
        to: '/error-404-cover'
      },
      {
        text: 'Career Page Minimal',
        to: '/career-page-minimal'
      }
    ]
  },
  {
    text: 'Account',
    to: '/account'
  },
  {
    text: 'Blog',
    to: '/blog'
  },
  {
    text: 'Porftolio',
    to: '/portfolio'
  }
]

const Nav: FC = (): ReactElement => {
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
          {navItems?.map((item, index) => (
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
