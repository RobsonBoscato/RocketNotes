import { Background, Container, Form } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/buttons'

import {FiMail, FiLock } from "react-icons/fi";

export function SignIn(){
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage your useful links</p>

        <h2>Start your Login </h2>

        <Input 
        placeholder='E-mail'
        type='text'
        icon={FiMail}
        />

        <Input 
        placeholder='Password'
        type='password'
        icon={FiLock}
        />

        <Button title='Acess'/>

        <a href="#">
          Create Account
        </a>
      </Form>

      <Background/>

    </Container>
  )
}