import styled from 'styled-components'

const DividerCurveWrapper = styled.svg`
  position: absolute;
  bottom: 0;
  z-index: 4;

  path {
    fill: ${({ theme, fillColor }) => theme.colors[fillColor]};
  }
`

export {
  DividerCurveWrapper
}
