import { Container, Flex } from 'styles/grid'
import { BannerFullWidthWrapper, BannerCaption, BannerImage } from './bannerFullWidth.styled'
import { TitleBanner, Lead, FigureCrypto, DividerCurve } from 'components/ui'
import { IconsDownload } from 'components/common'

const BannerFullWidth = () => {
  return (
    <BannerFullWidthWrapper>
      <Container>
        <Flex alignItems="center">
          <BannerCaption>
            <TitleBanner>Don&apos;t listen to what they say <span>go and see</span></TitleBanner>
            <Lead color="secondary">
              Travelling with our app is easy. <br />Join the biggest community of travellers.
            </Lead>
            <IconsDownload />
          </BannerCaption>
          <BannerImage>
            <FigureCrypto />
          </BannerImage>
        </Flex>
      </Container>
      <DividerCurve fill="backgroundColor" />
    </BannerFullWidthWrapper>
  )
}

export default BannerFullWidth
