import { FC } from 'react'
import { PropsText } from 'types/components/propsText'

const Text: FC<PropsText> = ({ children }) => {
  return (
    <p colorText={color}>{children}</p>
  )
}

export default Text
