import { useContext } from 'react'
import { ThemeContext } from 'store/Theme'
import { FooterWrapper, FooterContainer, FooterLogo, FooterCopy, List, ListItem, ListLink } from './footer.styled'
import logo from 'assets/logos/logo.svg'
import logoNegative from 'assets/logos/logo-negative.svg'
import { Button, SmallText } from 'components/ui'

const Footer = () => {
  const [storeTheme, dispatchTheme] = useContext(ThemeContext)
  const { modeTheme } = storeTheme

  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogo to="/">
          {modeTheme.mode === 'light'
            ? (
            <img src={logo} alt="" />
              )
            : (
            <img src={logoNegative} alt="" />
              )}
        </FooterLogo>

        <List>
          <ListItem>
            <ListLink to="/">Home</ListLink>
          </ListItem>
          <ListItem>
            <ListLink to="/documentation">Documentation</ListLink>
          </ListItem>
          <ListItem>
            <Button type="stroke">Purchase now</Button>
          </ListItem>
        </List>
      </FooterContainer>
      <FooterContainer>
        <FooterCopy>
          <h5>© theFront. 2021, Maccarian. All rights reserved</h5>
          <SmallText color="secondary">When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.</SmallText>
        </FooterCopy>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
