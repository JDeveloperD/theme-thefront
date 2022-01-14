import { ReactNode, ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './button.styled'

export type ButtonType = {
  children: ReactNode;
  to?: string
  type?: string
}

const Button = ({ children, to, type, ...props }: ButtonType): ReactElement => {
  return (
    <ButtonContainer type={type}>
      {to
        ? (
          <Link to={to} {...props}>{children}</Link>
          )
        : (
          <button {...props}>{children}</button>
          )}
    </ButtonContainer>
  )
}

export default Button
