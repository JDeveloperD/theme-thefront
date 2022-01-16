import { HeaderMainContent, Logo } from './headerMain'
import { Container, Flex } from 'styles/grid'
import { Nav } from 'components/common'
import { useContext, useState } from 'react'
import { ThemeContext } from 'store/Theme'
import { ButtonNavContainer } from 'components/ui'
import logo from 'assets/logos/logo.svg'
import logoNegative from 'assets/logos/logo-negative.svg'

const HeaderMain = () => {
  const [storeTheme, dispatchTheme] = useContext(ThemeContext)
  const { modeTheme, navMain } = storeTheme
  const [navSticky, setNavSticky] = useState(false)

  const headerStiky = () => {
    if (window.scrollY >= 150) {
      setNavSticky(true)
    } else {
      setNavSticky(false)
    }
  }

  window.addEventListener('scroll', headerStiky)

  return (
    <HeaderMainContent className={navSticky ? 'sticky' : ''}>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Logo to="/">
            {modeTheme.mode === 'light'
              ? (
              <img src={logo} alt="" />
                )
              : (
              <img src={logoNegative} alt="" />
                )}
          </Logo>
          <Nav items={navMain.items} />
          <ButtonNavContainer />
        </Flex>
      </Container>
    </HeaderMainContent>
  )
}

export default HeaderMain
