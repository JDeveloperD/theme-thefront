import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container } from 'styles/grid'
import { resetUl } from 'styles/mixins'
import { FONTS_SIZES, MEDIA_BREAKPOINTS } from 'styles/variables'

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${MEDIA_BREAKPOINTS.mobile} {
    flex-direction: row;
    justify-content: space-between;
  }
`

const FooterLogo = styled(Link)`
  display: inline-block;
  width: 80px;

  img {
    width: 100%;
    height: 100%;
  }
`
const List = styled.ul`
  ${resetUl}
  text-align: center;
`
const ListItem = styled.li`
  display: inline-block;
  padding: 0.4rem;
`
const ListLink = styled(Link)`
  color: ${({ theme }) => theme.fontColor};
  text-decoration: none;
  font-size: ${FONTS_SIZES.medium};
  font-weight: 400;
`

export {
  FooterWrapper,
  FooterContainer,
  FooterLogo,
  List,
  ListItem,
  ListLink
}
