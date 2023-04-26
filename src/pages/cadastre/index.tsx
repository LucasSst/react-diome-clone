import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Header } from '../../components/Header';
import {Container, Title, Section, SpacingButton, ParagraphSecondary, ParagraphPrimary } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import {AiOutlineMail, AiTwotoneLock , AiOutlineUser } from "react-icons/ai"
import { Link } from "react-router-dom";
const schema = yup.object({
  nome: yup.string().required('Insira um nome correto.'),
  password:yup.string().min(4, 'Mínimo 4 caracteres.').required('Mínimo 4 caracteres.'),
  email: yup.string().email('Insira um email válido.').required('Insira um email válido.'),
}).required();

const Cadastre = () => {
  const { control, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
    mode:"onChange"
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    
    <>
        <Header/>
        <Container>
            
                <Title>
                    <h1>
                      A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </h1>
                </Title>
            
            <Section>
                <h1>Comece agora grátis</h1>
                <h3>Crie sua conta e make the change._</h3>
                
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Input control={control} errorMessage={errors.nome?.message} name="nome" placeholder="Nome Completo" type='text' leftIcon={<AiOutlineUser />} />
                    
                    <Input control={control} errorMessage={errors.email?.message}  name="email" placeholder="E-mail: " leftIcon={<AiOutlineMail/>} />

                    <Input control={control} errorMessage={errors.password?.message}  name="password" placeholder="Senha:" type='password' leftIcon={<AiTwotoneLock/>} />
                    <SpacingButton >
                      <Button title="Criar conta" type='submit' variant='secondary'  />
                    </SpacingButton>
                  </form>
                <ParagraphPrimary >
                  Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                </ParagraphPrimary>

                <ParagraphSecondary>Já tenho conta. <Link to="/login"><span> Fazer login</span></Link></ParagraphSecondary>
                
            </Section> 
        </Container>
        
    </>
  )
}

export {Cadastre};