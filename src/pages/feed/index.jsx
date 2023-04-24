
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";




import {Container, Column, Title, TittleHighlight} from './styles'

import React from 'react'

const Feed = () => {
 
  return (
    <div>
        <Header autenticado={true} />
        <Container>
          <Column flex={3}>
            <Title>Feed</Title>
            <Card />
            <Card />
            <Card />
            <Card />
          </Column>
          
          <Column flex={1}>
            <TittleHighlight>#RANKING 5 TOP DA SEMANA</TittleHighlight>
            <UserInfo percentual={35} nome="Lucas T Silva" image='https://i.pinimg.com/736x/e9/ab/cd/e9abcd2f68657d064b88c885a3e36d0c.jpg'/>
            <UserInfo percentual={55} nome="Juam" image='https://wallpaperaccess.com/full/8026108.jpg'/>
            <UserInfo percentual={65} nome="Mathues" image='https://i.pinimg.com/originals/ae/7f/33/ae7f3365e114207da11091005a5ff280.jpg'/>
            <UserInfo percentual={75} nome="Juliano" image='https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg'/>
            <UserInfo percentual={85} nome="Nicolas" image='https://i.pinimg.com/474x/df/d9/e6/dfd9e6a77d9153cbb5c4c76700e47952.jpg'/>
          </Column>
         
        </Container>
    </div>
  )
}

export default Feed;