import styled from 'styled-components'
import { BORDER_RADIUS } from 'styles/variables'

const YoutubeWrapper = styled.div`
  width: auto;
  border-radius:${BORDER_RADIUS.base};
  overflow: hidden;
`

const YoutubeIframe = styled.iframe`
  width: 100%;
  height: 100%;
  min-height: 250px;
  border-radius:${BORDER_RADIUS.base};

`

export {
  YoutubeWrapper,
  YoutubeIframe
}
