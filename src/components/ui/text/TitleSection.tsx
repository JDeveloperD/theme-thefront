import { FC } from 'react'
import { TitleFont } from './text.styled'
import { PropsText } from 'types/components/propsText'

const TitleSection: FC<PropsText> = ({ children, color, textAlign }) => <TitleFont>{children}</TitleFont>

export default TitleSection
