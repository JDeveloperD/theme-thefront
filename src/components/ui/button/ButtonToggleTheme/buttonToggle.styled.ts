import styled from 'styled-components'
import { rgba } from 'polished'
import { TRANSITIONS } from 'styles/variables'

const ButtonToggleContainer = styled.button`
  width: 32px;
  height: 32px;
  padding: 5px;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.buttonToogleIcon};
  background-color: transparent;
  transition: background ${TRANSITIONS.base};

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.buttonToogleIcon, 0.1)};
    border-color: ${({ theme }) => theme.colors.buttonToogleIcon}
  }
`

export { ButtonToggleContainer }
