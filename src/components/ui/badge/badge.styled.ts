import styled from 'styled-components'
import { FONTS_SIZES, BORDER_RADIUS } from 'styles/variables'

interface IBadgeWrapper {
  backgroundColor?: string
}

const BadgeContainer = styled.span<IBadgeWrapper>`
  display: inline-flex;
  background: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  color: white;
  border-radius: ${BORDER_RADIUS.sm};
  font-size: ${FONTS_SIZES.sm};
  padding: 4px;
  line-height: 1;
`

export { BadgeContainer }
