import { useState } from 'react'

import { api } from '../../services/api'

import { Background, Container, Form } from './styles'
import { Button } from '../../components/buttons'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

import {FiMail, FiLock, FiUser } from "react-icons/fi";

export function SignUp(){
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSignUp() {
    if (!email || !email || !password) {
      return alert("Please fill in all the required fields")
    }

    api.post("/users", {name, email, password })
      .then(() => {
        alert("User successfully registered")
      })
        .catch(error => {
          if (error.response) {
            alert(error.response.data.message)
          }else {
            alert("ERROR, can't register the user")
          }
        })
    
  }

  return (
    <Container>
      <Background/>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Application to save and manage your useful links.</p>

        <h2>Create your account</h2>
  
        <Input 
        placeholder='Name'
        type='text'
        icon={FiUser}
        onChange={e => setName(e.target.value)} 
        />

        <Input 
        placeholder='E-mail'
        type='text'
        icon={FiMail}
        onChange={e => setEmail(e.target.value)}
        />

        <Input 
        placeholder='Password'
        type='password'
        icon={FiLock}
        onChange={e => setPassword(e.target.value)}
        />

        <Button title='Register' onClick={handleSignUp}/>

        <Link to='/'>
          Return to login
      
        </Link>
      </Form>


    </Container>
  )
}