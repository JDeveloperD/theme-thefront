import { FC } from 'react'
import { TitleFont } from './text.styled'
import { PropsText } from './Text'

const TitleSection: FC<PropsText> = ({ children, color }) => <TitleFont colorText={color}>{children}</TitleFont>

export default TitleSection
