import styled from 'styled-components'
import { resetUl } from 'styles/mixins'

const CardPriceWrapper = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  background-color: ${({ theme }) => theme.colors.backgroundContent};
  border-radius: 8px;
  overflow: hidden;
`

const CardPriceInfo = styled.div`
  padding: 1rem;
`

const CardPriceAmount = styled.ins`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 3rem;
  font-weight: 600;
`

const Currency = styled.span`
  font-size: 2rem;
  position: relative;
  top: -1rem;
  left: 0.5rem;
`

const CardPriceFeatures = styled.ul`
  ${resetUl}
  margin-top: 3rem;
`

const CardPriceFeaturesItem = styled.li`
  margin-bottom: 0.5rem;
`

const CardPriceActions = styled.div`
  padding: 2rem;
`

export {
  CardPriceWrapper,
  CardPriceInfo,
  CardPriceAmount,
  Currency,
  CardPriceFeatures,
  CardPriceFeaturesItem,
  CardPriceActions
}
