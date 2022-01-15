import DefaultLayout from 'layouts/DefaultLayout'
import { Apply, BannerFullWidth, Pricing, Suscription, Video } from 'blocks'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <DefaultLayout>
      <BannerFullWidth />
      <Video />
      <Suscription />
      <Pricing />
      <Apply />
    </DefaultLayout>
  )
}

export default Home
