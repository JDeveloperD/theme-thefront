import { FC } from 'react'
import { BadgeContainer } from './badge.styled'

interface IBadge {
  color?: string
}

const Badge: FC<IBadge> = ({ children, color, ...props }) => {
  return (
    <BadgeContainer backgroundColor={color} {...props}>
      {children}
    </BadgeContainer>
  )
}

export default Badge
