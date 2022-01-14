import { useContext } from 'react'
import { ThemeContext } from 'store/Theme'
import { FigureCryptoWrapper, FigureScreen, FigureContainer } from './figureCrypto.styled'
import cryptoMobileDark from 'assets/images/crypto-mobile-dark.png'
import cryptoMobile from 'assets/images/crypto-mobile.png'
import phoneNegative from 'assets/svg/phone-negative.svg'
import phone from 'assets/svg/phone.svg'

const FigureCrypto = () => {
  const [storeTheme, dispatchTheme] = useContext(ThemeContext)
  const { modeTheme } = storeTheme
  return (
    <FigureCryptoWrapper>
      <FigureContainer src={modeTheme.mode === 'light' ? phone : phoneNegative } alt="" />
      <FigureScreen src={modeTheme.mode === 'light' ? cryptoMobile : cryptoMobileDark } alt="" />
    </FigureCryptoWrapper>
  )
}

export default FigureCrypto
