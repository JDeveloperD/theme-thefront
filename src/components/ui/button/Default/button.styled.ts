import styled, { css } from 'styled-components'
import { resetButton } from 'styles/mixins'
import { BORDER_RADIUS, TRANSITIONS } from 'styles/variables'
import { darken, lighten, rgba } from 'polished'

interface IBtn {
  type?: string
  shape?: string
}

const ButtonContainer = styled.span<IBtn>`
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

    ${({ shape }) => shape === 'circle'
? css`
      padding: 0;
      border-radius: 50em;
      padding: 1rem;
      width: 3.5rem;
      height: 3.5rem;
      align-items: center;
    `
 : null}
  }
`

export { ButtonContainer }
