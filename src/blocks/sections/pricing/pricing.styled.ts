import styled from 'styled-components'
import { Container } from 'styles/grid'
import { MEDIA_BREAKPOINTS } from 'styles/variables'

const PricingWrapper = styled.section`
  position: relative;
  background-image: ${({ theme }) => theme.gradients.one};

  ${MEDIA_BREAKPOINTS.tablet} {
    padding-top: 3rem;
    padding-bottom: 4rem;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    padding-top: 4rem;
    padding-bottom: 7rem;
  }
`

const PricingContainer = styled(Container)`
  padding-top: 2rem;
  padding-bottom: 3rem;
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;

  ${MEDIA_BREAKPOINTS.laptop} {
    flex-flow: row;
  }
`

export {
  PricingWrapper,
  PricingContainer
}
