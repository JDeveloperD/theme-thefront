import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { TRANSITIONS } from 'styles/variables'

const HeaderMainContent = styled.div`
  padding: 0.5rem 0;
  
  &.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    background: ${({ theme }) => theme.colors.backgroundContent};
    box-shadow: ${({ theme }) => theme.colors.boxShadow};
    animation: down 0.3s;    
  }

  @keyframes down {
    0% {
      top: -100%;
    }
    100% {
      top: 0;
    }
  }
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
