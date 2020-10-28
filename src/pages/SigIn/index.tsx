import React, {useCallback, useRef} from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import {Container, Content, Backgroung} from './style'
import logo from '../../assets/logo.svg'
import Input from '../../Components/Input/index'
import Button from '../../Components/Button/Index'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'
import validationsErros from '../../utils/ValidationErros'

const SigIn: React.FC = () => {
   const formErros = useRef<FormHandles>(null)
   const handleSubmit = useCallback( async (data: object) => {

   	try {
			formErros.current?.setErrors({})
      	const schema = Yup.object().shape({
				name: Yup.string().required('Nome Obrigatotio'),
				email: Yup.string().required('E-mail Obrigatorio').email('Digite um email valido'),
				password: Yup.string().required('Senha Obrigatória')
			})

			await schema.validate(data, {
				abortEarly: false
			})
			
     	} catch(err){
			console.log(err)
			const erros = validationsErros(err)
			formErros.current?.setErrors(erros)
     	}
   }, [])


   return (
      <Container>
         <Content>
            <img src={logo} alt="LogIn"/>

            <Form ref={formErros} onSubmit={handleSubmit}>
               <h1>Faça Seu Login</h1>
               <Input name="email" icon={FiMail} placeholder="E-mail"/>
               
               <Input name="password" icon={FiLock} type="Password" placeholder="Senha"/>

               <Button type="submit">Entrar</Button>

               <a href="forgot">Esqueci minha senha</a>
            </Form>

            <a href="criar">
               <FiLogIn/>
               Criar Senha
            </a>
         </Content>

         <Backgroung/>



      </Container>
   )
}

export default SigIn;