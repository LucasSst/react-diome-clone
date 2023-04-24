import {AiOutlineMail, AiTwotoneLock } from "react-icons/ai"
import {Button} from "../../components/Button"
import { Header } from "../../components/Header";
import {Input} from "../../components/Input";

import {Column,Container,CriarText,EsqueciText,Row,SubtitleLogin,Title,TitleLogin,Wrapper} from './styles'

import React from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const handleClickSingIn = () => {
    navigate('/feed')
  }
  return (
    <>
        <Header />

        <Container>

          <Column>
            <Title>
              A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </Title>

          </Column>

          <Column>
            <Wrapper>
              <TitleLogin>Faça seu cadastro</TitleLogin>
              <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
              <form>
                <Input placeholder="E-mail" leftIcon={<AiOutlineMail />}/>
                <Input placeholder="Senha" type='password' leftIcon={<AiTwotoneLock />}/>
                <Button title="Entrar" variant='secondary' onClick={handleClickSingIn}  type='button'/>
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar Conta</CriarText>
              </Row>
            </Wrapper>
           
          </Column>

        </Container>
    </>
  )
}

export {Login};