import { Button, Lead } from 'components/ui'
import { CardPriceWrapper, CardPriceInfo, CardPriceAmount, Currency, CardPriceFeatures, CardPriceFeaturesItem, CardPriceActions } from './cardPrice.styled'

const FEATURES = [
  {
    name: '1 User',
    isValid: true
  },
  {
    name: '1 App',
    isValid: true
  },
  {
    name: 'Integrations',
    isValid: true
  },
  {
    name: 'Google Ads',
    isValid: true
  },
  {
    name: 'SSO via Google',
    isValid: true
  },
  {
    name: 'API access',
    isValid: false
  },
  {
    name: 'Fecebook Ads',
    isValid: false
  }
]

const CardPrice = ({ button }) => {
  return (
    <CardPriceWrapper>
      <CardPriceInfo>
        <Lead as="h3">Basic</Lead>
        <CardPriceAmount><Currency>$</Currency> 22</CardPriceAmount>
        <p>Per user, per month</p>
        <CardPriceFeatures>
          {FEATURES?.map((feature, index) => (
            <CardPriceFeaturesItem key={index}>{
              feature.isValid
                ? (
                <span>{feature.name}</span>
                  )
                : (
                <del>{feature.name}</del>
                  )
            }</CardPriceFeaturesItem>
          ))}
        </CardPriceFeatures>
      </CardPriceInfo>
      <CardPriceActions>
        <Button type="stroke">Get Basic</Button>
      </CardPriceActions>
    </CardPriceWrapper>
  )
}

export default CardPrice
