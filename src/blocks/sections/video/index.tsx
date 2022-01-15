import { IconsDownload, YoutubeEmbed } from 'components/common'
import { FigureCrypto, Lead, TitleSection } from 'components/ui'
import { VideoWrapper, VideoContainer, VideoImage, VideoInfo } from './video.styled'

const Video = () => {
  return (
    <VideoWrapper>
      <VideoContainer>
        <VideoImage>
          <FigureCrypto />
        </VideoImage>
        <VideoInfo>
          <TitleSection>Now available on Google Play market and Apple Store</TitleSection>
          <Lead color='secondary'>Don&apos;t listen to what they say go and see. Travelling with our app is easy. Join the biggest community of travellers.</Lead>
          <IconsDownload />
          <YoutubeEmbed embedId='rokGy0huYEA' title='Vídeo de youtube'/>
        </VideoInfo>
      </VideoContainer>
    </VideoWrapper>
  )
}

export default Video
