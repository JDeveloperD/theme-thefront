import { FC } from 'react'

const ArrowDownLight: FC = (props) => {
  return (
    <svg
      {...props}
      width="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 5V17.25L17.25 12L18 12.664L11.5 19.164L5 12.664L5.75 12L11 17.25V5H12Z" fill="currentcolor"/>
    </svg>
  )
}

export default ArrowDownLight
