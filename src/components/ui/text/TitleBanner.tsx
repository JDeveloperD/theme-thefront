import { FC } from 'react'
import { TitleFontLarge } from './text.styled'
import { PropsText } from 'types/components/propsText'

const TitleBanner: FC<PropsText> = ({ children, color }) => <TitleFontLarge colorText={color}>{children}</TitleFontLarge>

export default TitleBanner
