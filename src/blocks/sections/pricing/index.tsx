import { CardPrice } from 'components/common'
import { DividerCurve } from 'components/ui'
import { Container } from 'styles/grid'
import { PricingWrapper, PricingContainer } from './pricing.styled'

const Pricing = () => {
  return (
    <PricingWrapper>
      <Container>
        <h1>Flexible and transparent pricing</h1>
        <p>Whatever your status, our offers evolve according to your needs.</p>
      </Container>
      <PricingContainer>
        <CardPrice />
        <CardPrice />
        <CardPrice />
      </PricingContainer>
      <DividerCurve fill="backgroundColor" />
    </PricingWrapper>
  )
}

export default Pricing
