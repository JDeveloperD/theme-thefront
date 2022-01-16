import styled from 'styled-components'

interface IDividerStyled {
  fillColor?: string
}

const DividerCurveWrapper = styled.svg<IDividerStyled>`
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
