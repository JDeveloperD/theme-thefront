import styled, { css } from 'styled-components'
import { resetButton } from 'styles/mixins'
import { BORDER_RADIUS, TRANSITIONS } from 'styles/variables'
import { darken, lighten, rgba } from 'polished'

const ButtonContainer = styled.span`
  a, button {
    ${resetButton}

    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    border-radius: ${BORDER_RADIUS.sm};
    transition: ${TRANSITIONS.base};

    &:hover {
      background: ${({ theme }) => darken(0.08, theme.colors.primary)};
      color: white;
    }

  ${({ type }) => type === 'stroke'
? css`
      background: transparent;
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => lighten(0.2, theme.colors.primary)};

      &:hover {
        background: ${({ theme }) => rgba(theme.colors.primary, 0.07)};
        color: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};
      }
    `
: null}
  }
`

export { ButtonContainer }
