import { FC } from 'react'
import { TitleFontLarge } from './text.styled'

const TitleBanner: FC = ({ children, color }) => <TitleFontLarge colorText={color}>{children}</TitleFontLarge>

export default TitleBanner
