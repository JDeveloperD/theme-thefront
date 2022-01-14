import DefaultLayout from 'layouts/DefaultLayout'
import { BannerFullWidth, Pricing, Suscription } from 'blocks'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <DefaultLayout>
      <BannerFullWidth />
      <Suscription />
      <Pricing />
    </DefaultLayout>
  )
}

export default Home
