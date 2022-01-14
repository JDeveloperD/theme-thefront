import { SmallFont } from './text.styled'

const SmallText = ({ children, color }) => {
  return <SmallFont colorText={color}>{children}</SmallFont>
}

export default SmallText
