import styled from 'styled-components'

const FigureCryptoWrapper = styled.figure`
  width: auto;
  position: relative;
  border-radius: 48px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`

const FigureScreen = styled.img`
  position: absolute;
  left: 3%;
  top: 2%;
  z-index: -1;
  width: 94%;
  border-radius: 3rem;
`

const FigureContainer = styled.img`
`

export {
  FigureCryptoWrapper,
  FigureScreen,
  FigureContainer
}
