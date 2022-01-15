import { YoutubeWrapper } from 'components/common/YoutubeEmbed/youtubeEmbed.styled'
import { FigureCryptoWrapper } from 'components/ui/figure/FigureCrypto/figureCrypto.styled'
import styled from 'styled-components'
import { Container } from 'styles/grid'
import { MEDIA_BREAKPOINTS } from 'styles/variables'

const VideoWrapper = styled.section`
  padding: 2rem 0;

  ${MEDIA_BREAKPOINTS.tablet} {
    padding: 3rem 0;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    padding: 4rem 0;
  }
`

const VideoContainer = styled(Container)`
  display: flex;
  align-items: center;
  position: relative;

  &::after {
    position: absolute;
    content: "";
    width: 60%;
    z-index: -2;
    top: -2rem;
    left: 0px;
    height: 70%;
    background-size: 18px 18px;
    background-image: radial-gradient(rgba(47, 106, 217, 0.4) 20%, transparent 20%);
    opacity: 0.2;
  }
`
const VideoImage = styled.div`
  display: none;
  width: 100%;

  ${MEDIA_BREAKPOINTS.laptop} {
    display: block;
    
    ${FigureCryptoWrapper} {
      margin: 0 auto;
    }
  }
`
const VideoInfo = styled.div`
  ${YoutubeWrapper} {
    margin-top: 1.5rem;
    max-width: 400px;
  }
`
export {
  VideoWrapper,
  VideoContainer,
  VideoImage,
  VideoInfo
}
