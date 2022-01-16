import styled, { css } from 'styled-components'
import { MEDIA_BREAKPOINTS, CONTAINER_MAX_WIDTHS } from './variables'

const gutterX = '0.75rem'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-left: ${gutterX};
  padding-right: ${gutterX};

  ${p => p.fluid ?? css`
    ${MEDIA_BREAKPOINTS.mobile} {
      max-width: ${CONTAINER_MAX_WIDTHS.sm};
    }
    ${MEDIA_BREAKPOINTS.tablet} {
      max-width: ${CONTAINER_MAX_WIDTHS.md};
    }
    ${MEDIA_BREAKPOINTS.laptop} {
      max-width: ${CONTAINER_MAX_WIDTHS.lg};
    }
    ${MEDIA_BREAKPOINTS.desktop} {
      max-width: ${CONTAINER_MAX_WIDTHS.xl};
    }
    ${MEDIA_BREAKPOINTS.desktopL} {
      max-width: ${CONTAINER_MAX_WIDTHS.xxl};
    }
  `}
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: ${p => p.alignItems ?? null};
  justify-content: ${p => p.justifyContent ?? null};
  margin-left: -${gutterX};
  margin-right: -${gutterX};

  & > * {
    flex-shrink: 0;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    padding-left: ${gutterX};
    padding-right: ${gutterX};
  }
`

interface IFex {
  alignItems?: string
  justifyContent?: string
  gap?: number
}

export const Flex = styled.div<IFex>`
  display: flex;
  flex-wrap: wrap;
  align-items: ${p => p.alignItems ?? null};
  justify-content: ${p => p.justifyContent ?? null};
  gap: ${p => `${p.gap}rem` ?? null};
`
