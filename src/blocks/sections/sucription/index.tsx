import { Button, Lead, TitleSection } from 'components/ui'
import { SuscriptionWrapper, SuscriptionContainer, SuscriptionInfo, GroupButton, SuscriptionFigure } from './suscription.styled'
import creditCard from 'assets/svg/credit-card.svg'

const Suscription = () => {
  return (
    <SuscriptionWrapper>
      <SuscriptionContainer>
        <SuscriptionInfo>
          <TitleSection>The pro account for entrepreneurs.</TitleSection>
          <Lead color="secondary">Much more than a bank, it is the ideal, fastest and most convenient financial and administrative co-driver to work with peace of mind.</Lead>
          <GroupButton>
            <Button type="stroke" to="/">Contact sales</Button>
            <Button >Suscribe</Button>
          </GroupButton>
        </SuscriptionInfo>
        <SuscriptionFigure>
          <img src={creditCard} alt="" />
        </SuscriptionFigure>
      </SuscriptionContainer>
    </SuscriptionWrapper>
  )
}

export default Suscription
