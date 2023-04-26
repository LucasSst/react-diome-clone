
import logo from '../../assets/dio-logo.png'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../Button'

import{
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper,
    ExitLink
} from './styles'
import { useAuth } from '../../hooks/useAuth'


const Header = () => {
    const navigate = useNavigate();


    const handleLinkLogin = () =>{
        navigate('/login')
    }

    const handleLinkCadastre = () =>{
        navigate('/cadastre')
    }

    const handleLinkHome = () => {
        navigate('/')
    }
    const {user, handleSingOut} = useAuth()

  return (
    <Wrapper>
        <Container>
            <Row>
                <Link to='/'>
                    <img width={80}  src={logo} alt='logo da dio'/>
                </Link>
                
                {user.id ? (<>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>) : null}
                
            </Row>

            <Row>
                {user.id ? (
                    <>
                        <UserPicture src='https://i.pinimg.com/736x/e9/ab/cd/e9abcd2f68657d064b88c885a3e36d0c.jpg'/> {""}
                        <ExitLink href="#" onClick={handleSingOut}> Exit</ExitLink>
                    </>
                ) : (
                    <>
                        <MenuRight onClick={handleLinkHome} href='#'>Home</MenuRight>
                        <Button  onClick={handleLinkLogin}  title="Entrar"/>
                        <Button onClick={handleLinkCadastre} title="Cadastrar"/>
                    </>
                )}
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header};
