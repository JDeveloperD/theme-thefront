import styled from 'styled-components'
import { BadgeContainer } from 'components/ui/badge/badge.styled'

const HeaderTopContent = styled.div`
  padding: 0.5rem 0;
  a {
    color: ${({ theme }) => theme.fontColor};
    text-decoration: none;

    ${BadgeContainer} {
      margin-left: 0.25rem;
    }
  }
`

export { HeaderTopContent }
