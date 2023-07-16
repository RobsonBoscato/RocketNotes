import { Link } from 'react-router-dom'

import { Container, Form } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/Noteitem";
import { Section } from "../../components/Section";
import { Button } from "../../components/buttons";



export function New(){
  return (
    <Container>
      <Header/>

      
      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <Link to="/">Back</Link>
          </header>

          <Input placeholder='Title'/>
          <Textarea placeholder='Observations'/>

          <Section title='Useful Links'/>

          <NoteItem value='https://www.rocketseat.com.br'/>
          <NoteItem isNew placeholder='New link'/>

          <Section title='Bookmarks'>
            <div className="tags">
              <NoteItem value='https://www.rocketseat.com.br'/>
              <NoteItem isNew placeholder='New link'/>
            </div>
          </Section>
          
          <Button title="Save"/>


        </Form>
      </main>
    </Container>
  )
}