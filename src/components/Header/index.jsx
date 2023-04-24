import React from 'react'
import logo from '../../assets/dio-logo.png'

import { Button } from '../Button'

import{
    BuscarInputContainer,
    Column,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    UserPicture,
    Wrapper
} from './styles'

const Header = ({autenticado}) => {
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
                        <MenuRight href='#'>Home</MenuRight>
                        <Button  title="Entrar"/>
                        <Button  title="Cadastrar"/>
                    </>
                )}
                
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header};
