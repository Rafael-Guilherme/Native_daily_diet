import { Container, Logo, Photo } from './styles'

import logoImg from '@assets/Logo.png'

const Header = () => {
  return (
    <Container>
        <Logo source={logoImg} />
        
        <Photo />
    </Container>
  )
}

export default Header