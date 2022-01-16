import { linearGradient, rgba } from 'polished'
import styled from 'styled-components'
import { FONTS_SIZES, MEDIA_BREAKPOINTS } from 'styles/variables'

interface IText {
  colorText?: string
}

const TitleFontLarge = styled.h1<IText>`
  color: ${({ theme, colorText }) => theme.colors[colorText]};
  font-size: ${FONTS_SIZES.xlarge};
  font-weight: 600;

  span {
    background: ${({ theme }) => linearGradient({ colorStops: ['transparent 82%', `${rgba(theme.colors.warning, 0.3)} 0%`] })};
    color: ${({ theme }) => theme.colors.primary};
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    font-size: 2.5707rem;
  }
`

const LeadFont = styled.p<IText>`
  color: ${({ theme, colorText }) => theme.colors[colorText]};
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  ${MEDIA_BREAKPOINTS.tablet} {
    font-size: 1.25rem;
  }
`

const TitleFont = styled.h3<IText>`
  font-size: 1.8219rem;
  color: ${({ theme, colorText }) => theme.colors[colorText]};

  ${MEDIA_BREAKPOINTS.tablet} {
    font-size: 2.0243rem;
  }
`

const SmallFont = styled.small<IText>`
  color: ${({ theme, colorText }) => theme.colors[colorText]};
  font-size: 0.75rem;
  line-height: 1.6;
`

export {
  TitleFontLarge,
  TitleFont,
  LeadFont,
  SmallFont
}
