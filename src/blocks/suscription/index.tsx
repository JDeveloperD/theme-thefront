import { CardPrice } from 'components/common'
import { DividerCurve } from 'components/ui'
import { Container } from 'styles/grid'
import { SuscriptionWrapper, SuscriptionContainer } from './sucription.styled'

const Suscription = () => {
  return (
    <SuscriptionWrapper>
      <Container>
        <h1>Flexible and transparent pricing</h1>
        <p>Whatever your status, our offers evolve according to your needs.</p>
      </Container>
      <SuscriptionContainer>
        <CardPrice />
        <CardPrice />
        <CardPrice />
      </SuscriptionContainer>
      <DividerCurve fill="backgroundColor" />
    </SuscriptionWrapper>
  )
}

export default Suscription
