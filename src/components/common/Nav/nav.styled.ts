import styled from 'styled-components'
import { rgba } from 'polished'
import { Link } from 'react-router-dom'
import { absoluteZeros, resetUl } from 'styles/mixins'
import { Z_INDEXS, GRAY_SCALE, BORDER_RADIUS, TRANSITIONS, MEDIA_BREAKPOINTS } from 'styles/variables'
import { ButtonContainer } from 'components/ui/button/Default/button.styled'

const NavListButtonToggle = styled.button`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  color: ${({ theme }) => theme.fontColor};
  border-style: none;
  background: transparent;
  text-align: left;
`

const NavListLink = styled(Link)`
  display: inline-block;
  width: 100%;
  margin: 0.75rem 0;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColor};

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    font-size: 0.9375rem;
  }
`

const NavListChildren = styled.ul`
  ${resetUl}
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  display: none;

  &.active {
    display: flex;
  }
  
  ${NavListLink} {
    color: ${({ theme }) => theme.fontColor};
    padding: 0.5rem;
    border-radius: ${BORDER_RADIUS.sm};
    margin: 0;
    font-size: 0.9375rem;

    &.active {
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => rgba(theme.colors.primary, 0.1)};
    }
  }
`

const NavListItem = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const NavList = styled.ul`
  ${resetUl}

  padding: 1rem;
`

const NavFooter = styled.footer`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${ButtonContainer} {
    display: block;

    a, button {
      width: 100%;
    }
  }
`

const NavHeader = styled.header`
  padding: 0.5rem 1rem;

  img {
    width: 100%;
    max-width: 100px;
  }
`

const NavContainer = styled.div`
  position: absolute;
  top: 0;
  background: ${({ theme }) => theme.colors.navBackground};
  width: 100%;
  max-width: 300px;
  height: 100%;
  padding: 1rem;
  transition: left ${TRANSITIONS.base};
`

const NavOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: ${rgba(GRAY_SCALE.black, 0.5)};;
  position: absolute;
`

const NavWrapper = styled.nav`
  ${absoluteZeros(Z_INDEXS.nav)}
  
  max-width: 100vw;
  transition: ${TRANSITIONS.base};
  visibility: hidden;
  opacity: 0;

  ${NavContainer} {
    left: -100%;
  }

  &.active {
    visibility: visible;
    opacity: 1;

    ${NavContainer} {
      left: 0;
    }
  }

  // RESPONSIVE MOBILE
  ${MEDIA_BREAKPOINTS.laptop} {
    visibility: visible;
    opacity: 1;
    position: relative;

    ${NavOverlay},
    ${NavHeader} {
      display: none;
    }

    ${NavFooter} {
      padding: 0 0 0 1rem;

      ${ButtonContainer}:nth-child(1) {
        display: none;
      }
    }

    ${NavContainer} {
      width: auto;
      max-width: initial;
      position: relative;
      left: initial;
      display: flex;
      align-items: center;
      padding: 0;
      background: transparent;
    }

    ${NavList} {
      padding: 0 1rem 0 0;
    }

    ${NavListItem} {
      display: inline-flex;
      padding: 0 1rem;
      position: relative;
    }

    ${NavListLink} {
      /* margin: 0;
      padding: 1rem; */
      &.active {
        color: ${({ theme }) => theme.fontColor}
      }
    }

    ${NavListChildren} {
      display: flex;
      flex-direction: column;
      background: ${({ theme }) => theme.colors.navBackground};
      min-width: 250px;
      max-width: 250px;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-top: 3px solid ${({ theme }) => theme.colors.primary};
      border-bottom-left-radius: ${BORDER_RADIUS.base};
      border-bottom-right-radius: ${BORDER_RADIUS.base};
      box-shadow: rgb(140 152 164 / 13%) 0px 6px 24px 0px;
      padding: 1rem;
      opacity: 0;
      visibility: hidden;

      ${NavListItem} {
        padding: 0;
      }

      ${NavListLink} {
        transition: background ${TRANSITIONS.base};

        &:hover {
          background: ${({ theme }) => rgba(theme.colors.primary, 0.1)}
        }
      }

      &.active {
        visibility: visible;
        opacity: 1;
      }
    }
  }
`

export {
  NavListChildren,
  NavListButtonToggle,
  NavListLink,
  NavListItem,
  NavList,
  NavFooter,
  NavHeader,
  NavContainer,
  NavOverlay,
  NavWrapper
}
