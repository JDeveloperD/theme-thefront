import { FC } from 'react'
import { DividerCurveWrapper } from './dividerCurve.styled'

interface IDivider {
  fill?: string
}

const DividerCurve: FC<IDivider> = ({ fill }) => {
  return (
    <DividerCurveWrapper
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1920 100.1"
      fillColor={fill}
    >
      <path d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
    </DividerCurveWrapper>
  )
}

export default DividerCurve
