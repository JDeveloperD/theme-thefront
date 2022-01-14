
import { IconsDownload } from 'components/common'
import { Button, Lead, TitleSection } from 'components/ui'
import { FunctionComponent } from 'react'
import { Container } from 'styles/grid'
import { ApplyGroup, ApplyWrapper, ApplyGroupIcons } from './apply.styled'

interface ApplyProps {

}

const Apply: FunctionComponent<ApplyProps> = () => {
  return (
    <ApplyWrapper>
      <Container>
        <TitleSection>Everything your team could need</TitleSection>
        <Lead color="secondary">We make sure to include all the amenities and niceties that a growing startup could possibly need.</Lead>
        <ApplyGroup>
          <div>
            <Lead>Apply in 15 minutes</Lead>
            <p>Get your dream mobile app without the hassle.</p>
          </div>

          <IconsDownload />
        </ApplyGroup>
      </Container>
    </ApplyWrapper>
  )
}

export default Apply
