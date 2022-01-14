import { FC } from 'react'
import { LeadFont } from './text.styled'

const Lead: FC = ({ children, color }) => <LeadFont colorText={color}>{children}</LeadFont>

export default Lead
