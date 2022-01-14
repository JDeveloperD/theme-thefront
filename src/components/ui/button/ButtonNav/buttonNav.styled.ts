import styled from 'styled-components'
import { resetButton } from 'styles/mixins'
import { BORDER_RADIUS, MEDIA_BREAKPOINTS } from 'styles/variables'

const ButtonNavContainer = styled.button`
  ${resetButton}
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.5rem;
  border-radius: ${BORDER_RADIUS.base};
  color: ${({ theme }) => theme.colors.link};

  ${MEDIA_BREAKPOINTS.laptop} {
    display: none;
  }
`

export {
  ButtonNavContainer
}
