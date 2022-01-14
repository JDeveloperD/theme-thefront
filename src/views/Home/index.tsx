import DefaultLayout from 'layouts/DefaultLayout'
import { Apply, BannerFullWidth, Pricing, Suscription } from 'blocks'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <DefaultLayout>
      <BannerFullWidth />
      <Suscription />
      <Pricing />
      <Apply />
    </DefaultLayout>
  )
}

export default Home
