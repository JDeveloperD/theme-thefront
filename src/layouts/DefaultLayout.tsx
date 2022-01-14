import { FC } from 'react'
import { Header, Footer } from 'blocks'
import { MainContainer } from './layout.styled'

const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
        <MainContainer>
          {children}
        </MainContainer>
      <Footer />
    </>
  )
}

export default DefaultLayout
