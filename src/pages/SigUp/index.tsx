import React, { useCallback, useRef } from 'react'
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import {Container, Content, Backgroung} from './styles'
import { Form } from '@unform/web'
import logo from '../../assets/logo.svg'
import Input from '../../Components/Input/index'
import Button from '../../Components/Button/Index'
import * as Yup from 'yup'
import validationsErros from '../../utils/ValidationErros'
import { FormHandles } from '@unform/core'



const SigIn: React.FC = () => {
   const formErros = useRef<FormHandles>(null)
   const handleSubmit = useCallback( async (data: object) => {

   	try {
			formErros.current?.setErrors({})
      	const schema = Yup.object().shape({
				name: Yup.string().required('Nome Obrigatotio'),
				email: Yup.string().required('E-mail Obrigatorio').email('Digite um email valido'),
				password: Yup.string().min(6, 'No minimo 6 digitos')
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
         <Backgroung/>
         <Content >
            <img src={logo} alt="LogIn"/>

            <Form ref={formErros} onSubmit={handleSubmit} >
               <Input name="name" icon={FiUser} placeholder="Nome"/>

               <Input name="email" icon={FiMail} placeholder="E-mail"/>
               
               <Input name="password" icon={FiLock} type="Password" placeholder="Senha"/>

               <Button type="submit">Cadastrar</Button>

               <a href="forgot">Esqueci minha senha</a>
            </Form>

            <a href="criar">
               <FiArrowLeft/>
               Voltar para o login
            </a>
         </Content>
      </Container>
   )
}

export default SigIn;