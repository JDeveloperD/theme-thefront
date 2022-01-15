import { FC } from 'react'
import { LeadFont } from './text.styled'
import { PropsText } from 'types/components/propsText'

const Lead: FC<PropsText> = ({ children, color }) => <LeadFont colorText={color}>{children}</LeadFont>

export default Lead
