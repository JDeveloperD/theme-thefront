import { BadgeContainer } from './badge.styled'

const Badge = ({ children, ...props }) => {
  return (
    <BadgeContainer {...props}>
      {children}
    </BadgeContainer>
  )
}

export default Badge
