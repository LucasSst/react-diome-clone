import bannerImg from '../../assets/banner.png'

import { useNavigate } from "react-router-dom";

import {Button} from "../../components/Button"
import { Header } from "../../components/Header";

import {Container, TextContent, Title, TittleHighlight} from './styles'

import React from 'react'

const Home = () => {
  const navigate = useNavigate()

  const handleClickSingIn = () => {
    navigate('/login')
  }
  return (
    <div>
        <Header/>
        <Container>
          <div>
            <Title>
              <TittleHighlight>
                Implemente 
              <br />
              </TittleHighlight>
              o seu futuro global agora!
            </Title>
            <TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
            </TextContent>
            <Button title="Começar agora!" variant="secondary" onClick={handleClickSingIn}/>
          </div>
          <div>
            <img width={500} src={bannerImg} alt="imagem banner"/>
          </div>
        </Container>
    </div>
  )
}

export default Home;