import {CardContainer ,Content ,HasInfo ,ImageBackground, PostInfo, UserInfo, UserPicture} from './styled'
import {FiThumbsUp} from 'react-icons/fi'
const Card = ()  => {
  return (
    <CardContainer>
        <ImageBackground src='https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_SonicLostWorld_image1600w.jpg' />
            <Content>
                <UserInfo>
                    <UserPicture src='https://i.pinimg.com/736x/e9/ab/cd/e9abcd2f68657d064b88c885a3e36d0c.jpg' />
                    <div>
                        <h4> Lucas T Silva</h4>
                        <p> Há 20 minutos</p>
                    </div>
                </UserInfo>
                <PostInfo>
                    <h4>Projeto para o curso de React</h4>
                    <p>Projeto desenvolvido no bootcamp... <strong>Saiba Mais</strong></p>
                </PostInfo>
                <HasInfo>
                    <h4>#JAVASCRIPT #REACT</h4>
                    <p>
                        <FiThumbsUp/> 10
                    </p>
                </HasInfo>
            </Content>
       
    </CardContainer>
  )
}
export {Card};
