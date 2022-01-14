import { FC } from 'react'

const MenuLight: FC = (props) => {
  return (
    <svg
      {...props}
      width="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 8V7H20V8H3ZM20 12V13H3V12H20ZM3 17H20V18H3V17Z" fill="currentColor"/>
    </svg>
  )
}

export default MenuLight
