import DefaultLayout from 'layouts/DefaultLayout'
import { BannerFullWidth, Suscription } from 'blocks'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <DefaultLayout>
      <BannerFullWidth />
      <Suscription />
    </DefaultLayout>
  )
}

export default Home
