import { FC } from 'react'
import { SmallFont } from './text.styled'
import { PropsText } from './Text'

const SmallText: FC<PropsText> = ({ children, color }) => {
  return <SmallFont colorText={color}>{children}</SmallFont>
}

export default SmallText
