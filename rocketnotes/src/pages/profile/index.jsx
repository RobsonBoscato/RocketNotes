import { Container, Form, Avatar } from './styles'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from 'React-icons/fi'
import { Button } from '../../components/buttons'

import { Input } from '../../components/Input'

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft/>
        </a>
      </header>

      <Form>
        <Avatar>
          <img 
          src="https://github.com/robsonboscato.png" 
          alt="User photo" 
          />

          <label htmlFor="avatar">

          <FiCamera />

          <input 
            id='avatar'
            type="file" 
          />
          </label>

        </Avatar>
        <Input 
          placeholder='Name'
          type='text'
          icon={FiUser}
          />

        <Input 
          placeholder='E-mail'
          type='text'
          icon={FiMail}
          />

        <Input 
          placeholder='Current password'
          type='password'
          icon={FiLock}
          />

        <Input 
          placeholder='New password'
          type='password'
          icon={FiLock}
          />

        <Button title='Save'/>

    
      </Form>



    </Container>
  )

}