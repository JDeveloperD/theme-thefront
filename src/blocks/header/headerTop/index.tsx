import { Container, Flex } from 'styles/grid'
import { Link } from 'react-router-dom'
import { ButtonToggleTheme, Badge } from 'components/ui'
import { HeaderTopContent } from './headerTop.styled'

const HeaderTop = () => {
  return (
    <HeaderTopContent>
      <Container>
        <Flex justifyContent="flex-end" alignItems="center" gap="0.5rem">
          <Link to="/about">
            Demos <Badge color="primary">new</Badge>
          </Link>
          <Link to="/">Components</Link>
          <Link to="/">Docs</Link>
          <ButtonToggleTheme />
        </Flex>
      </Container>
    </HeaderTopContent>
  )
}

export default HeaderTop
