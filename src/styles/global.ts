import { createGlobalStyle } from 'styled-components'
import { TRANSITIONS, FONTS, FONTS_SIZES } from './variables'

const GlobalStyles = createGlobalStyle`
    * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  :focus {
    outline: none;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
    transition: background ${TRANSITIONS.base}, color ${TRANSITIONS.base};
    font-family: ${FONTS.inter};
    font-size: ${FONTS_SIZES.base};
    font-weight: 400;
    line-height: 1.5;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    font-size: ${FONTS_SIZES.base};
    line-height: 1.5;
  }

  button {
    cursor: pointer;
    font-family: ${FONTS.inter};
    font-size: ${FONTS_SIZES.base};
    line-height: 1.5;
  }

  p {
    line-height: 1.8;
    margin-block-start: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-block-start: 0;
  }

  figure {
    margin: 0;
  }
`

export default GlobalStyles
