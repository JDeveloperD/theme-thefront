import { IconsDownloadWrapper } from 'components/common/iconsDownload/iconsDownload'
import { LeadFont } from 'components/ui/text/text.styled'
import styled from 'styled-components'
import { MEDIA_BREAKPOINTS } from 'styles/variables'

const ApplyWrapper = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;

  ${MEDIA_BREAKPOINTS.tablet} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`

const ApplyGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${LeadFont} {
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  ${IconsDownloadWrapper} {
    margin-top: 1rem;
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    flex-direction: row;
    justify-content: space-between;

    ${IconsDownloadWrapper} {
      margin-top: 0;
    }
  }
`

export {
  ApplyWrapper,
  ApplyGroup
}
