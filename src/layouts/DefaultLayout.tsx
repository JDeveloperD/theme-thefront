import { FC } from 'react'
import { Header, Footer } from 'blocks'
import { MainContainer } from './layout.styled'
import { motion } from 'framer-motion'

const DefaultLayout: FC = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Header />
        <MainContainer>
          {children}
        </MainContainer>
      <Footer />
    </motion.div>
  )
}

export default DefaultLayout
