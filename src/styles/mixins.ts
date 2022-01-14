import { css } from 'styled-components'
import { FONTS_SIZES } from './variables'

export const absoluteZeros = (zIndex: number) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${zIndex};
`

export const resetUl = css`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const resetButton = css`
  padding: 0.5rem 1.5rem;
  display: inline-flex;
  justify-content: center;
  border-style: none;
  background: transparent;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};
  border: 1px solid transparent;
  line-height: 1.75;
  font-size: ${FONTS_SIZES.button};
  font-weight: 400;
`
