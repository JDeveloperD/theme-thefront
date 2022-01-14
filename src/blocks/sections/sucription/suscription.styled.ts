import { Button } from 'components/ui'
import { ButtonContainer } from 'components/ui/button/Default/button.styled'
import styled from 'styled-components'
import { Container } from 'styles/grid'
import { MEDIA_BREAKPOINTS } from 'styles/variables'

const SuscriptionWrapper = styled.section`
  padding: 2rem 0;
  background: ${({ theme }) => theme.gradients.one};

  ${MEDIA_BREAKPOINTS.tablet} {
    padding: 3rem 0;
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    padding: 4rem 0;
  }
`

const SuscriptionContainer = styled(Container)`
  display: flex;
  gap: 3rem;
  flex-flow: row wrap;

  ${MEDIA_BREAKPOINTS.laptop} {
    flex-flow: row;
    align-items: center;
  }
`

const SuscriptionInfo = styled.div`
  width: 100%;
`

const GroupButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${ButtonContainer} {
    display: block;

    a, button {
      display: block;
      width: 100%;
    }
  }

  ${MEDIA_BREAKPOINTS.tablet} {
    flex-direction: row;

    ${ButtonContainer} {
      width: 100%;
    }
  }

  ${MEDIA_BREAKPOINTS.laptop} {
    ${ButtonContainer} {
      width: auto;
    }
  }
`

const SuscriptionFigure = styled.figure`
  width: 100%;

  img {
    display: block;
    width: 100%;
    max-width: 450px;
    margin: 0 auto;
  }
`

export {
  SuscriptionWrapper,
  SuscriptionContainer,
  SuscriptionInfo,
  GroupButton,
  SuscriptionFigure
}
