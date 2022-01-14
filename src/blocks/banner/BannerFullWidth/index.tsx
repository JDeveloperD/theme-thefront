import { Container, Flex } from 'styles/grid'
import { BannerFullWidthWrapper, DividerCurveBottom, BannerCaption, BannerImage } from './bannerFullWidth.styled'
import { TitleBanner, Lead, FigureCrypto } from 'components/ui'

const BannerFullWidth = () => {
  return (
    <BannerFullWidthWrapper>
      <Container>
        <Flex alignItems="center">
          <BannerCaption>
            <TitleBanner>Don&apos;t listen to what they say <span>go and see</span></TitleBanner>
            <Lead>
              Travelling with our app is easy. <br />Join the biggest community of travellers.
            </Lead>
          </BannerCaption>
          <BannerImage>
            <FigureCrypto />
          </BannerImage>
        </Flex>
      </Container>
      <DividerCurveBottom
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 1920 100.1"
      >
        <path d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
      </DividerCurveBottom>
    </BannerFullWidthWrapper>
  )
}

export default BannerFullWidth
