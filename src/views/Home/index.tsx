import DefaultLayout from 'layouts/DefaultLayout'
import { BannerFullWidth } from 'blocks'
import { FC } from 'react'

const Home: FC = () => {
  return (
    <DefaultLayout>
      <BannerFullWidth />
    </DefaultLayout>
  )
}

export default Home
