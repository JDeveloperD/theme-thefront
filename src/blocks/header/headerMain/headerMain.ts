import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderMainContent = styled.div`
  padding: 0.5rem 0;
`

const Logo = styled(Link)`
  display: block;
  width: 100%;
  max-width: 100px;

  img {
    width: 100%;
  }
`

export {
  HeaderMainContent,
  Logo
}
