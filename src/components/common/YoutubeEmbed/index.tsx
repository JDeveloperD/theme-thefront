import { FC } from 'react'
import { YoutubeWrapper, YoutubeIframe } from './youtubeEmbed.styled'

interface YoutubeEmbedProps {
  embedId: string,
  title?: string
}

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({ embedId, title }) => (
  <YoutubeWrapper>
    <YoutubeIframe
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  </YoutubeWrapper>
)

export default YoutubeEmbed
