import { FigureCryptoWrapper } from 'components/ui/figure/FigureCrypto/figureCrypto.styled'
import styled from 'styled-components'
import { Container, Flex } from 'styles/grid'
import { MEDIA_BREAKPOINTS } from 'styles/variables'

const BannerFullWidthWrapper = styled.section`
  padding-top: 104px;
  width: 100%;
  background-image: ${({ theme }) => theme.gradients.one};
  position: relative;

  ${Flex} {
    padding: 3rem 0;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    height: 100vh;

    ${Container} {
      height: calc(100% - 104px);
    }
  }
`

const BannerCaption = styled.div`
  ${MEDIA_BREAKPOINTS.laptop} {
    width: 50%;
  }
`

const BannerImage = styled.div`
  width: 100%;
  max-width: 450px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 3rem;
  perspective: 1500px;
  transform-style: preserve-3d;
  perspective-origin: 0px center;

  ${FigureCryptoWrapper} {
    transform: rotateY(-35deg) rotateX(15deg) translateZ(0px);
  }

  ${MEDIA_BREAKPOINTS.tablet} {
  }
`

export {
  BannerFullWidthWrapper,
  BannerCaption,
  BannerImage
}
