import React from 'react'
import logo from '../../assets/dio-logo.png'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button'

import{
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'


const Header = ({autenticado}) => {
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
     
  return (
    <Wrapper>
        <Container>
            <Row>
                <img width={80}  src={logo} alt='logo da dio'/>
                {autenticado ? (<>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...'/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>) : null}
                
            </Row>

            <Row>
                {autenticado ? (
                    <UserPicture src='https://i.pinimg.com/736x/e9/ab/cd/e9abcd2f68657d064b88c885a3e36d0c.jpg'/>
                ) : (
                    <>
                        <MenuRight onClick={handleLinkHome} href='#'>Home</MenuRight>
                        <Button onClick={handleLinkLogin}  title="Entrar"/>
                        <Button onClick={handleLinkCadastre} title="Cadastrar"/>
                    </>
                )}
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header};
