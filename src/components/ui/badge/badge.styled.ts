import styled from 'styled-components'
import { FONTS_SIZES, BORDER_RADIUS } from 'styles/variables'

const BadgeContainer = styled.span`
  display: inline-flex;
  background: ${({ theme, color }) => theme.colors[color]};
  color: white;
  border-radius: ${BORDER_RADIUS.sm};
  font-size: ${FONTS_SIZES.sm};
  padding: 4px;
  line-height: 1;
`

export { BadgeContainer }
