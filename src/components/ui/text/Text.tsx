import { FC, ReactNode } from 'react'

export type PropsText = {
  children: ReactNode;
  color?: string;
  textAlign?: string
}

const Text: FC<PropsText> = ({ children }) => {
  return (
    <p colorText={color}>{children}</p>
  )
}

export default Text
