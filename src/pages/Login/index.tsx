import {AiOutlineMail, AiTwotoneLock } from "react-icons/ai"

import {Button} from "../../components/Button"
import { Header } from "../../components/Header";
import {Input} from "../../components/Input";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";

import {Column,Container,CriarText,EsqueciText,Row,SubtitleLogin,Title,TitleLogin,Wrapper} from './styles'



import { Link} from "react-router-dom";
import { IFormData } from "./types";
import { useAuth } from "../../hooks/useAuth";


const schema = yup.object({
  email: yup.string().email('Digite um email válido!').required('Campo obrigatório.'),
  password: yup.string().min(4, 'Mínimo de 4 caracteres').required('Campo obrigatório.'),
}).required();  

const Login = () => {
    const {handleLogin} = useAuth()

    const { control, handleSubmit,  formState: { errors} } = useForm<IFormData>({
      resolver: yupResolver(schema),
      mode: 'onChange',
    });


    const onSubmit = async (formData:IFormData) => {
      await handleLogin(formData)
    };
  
  return (
    <>
        <Header/>

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
              <form onSubmit={handleSubmit(onSubmit)}> 
                <Input  errorMessage={errors.email?.message}  name='email' control={control} placeholder="E-mail" leftIcon={<AiOutlineMail />}/>
                
                <Input  errorMessage={errors.password?.message} name='password' control={control}  placeholder="Senha" type='password' leftIcon={<AiTwotoneLock />}/>
                
                <Button title="Entrar" variant='secondary' type='submit'/>
              </form>
              <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText><Link to="/cadastre">Criar Conta</Link></CriarText>
              </Row>
            </Wrapper>
           
          </Column>

        </Container>
    </>
  )
}

export {Login};