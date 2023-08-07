import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'

import { Container, Form } from "./styles";
import { api } from '../../services/api';
import { Navigate } from 'react-router-dom';

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/Noteitem";
import { Section } from "../../components/Section";
import { Button } from "../../components/buttons";



export function New(){
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")


  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')
  
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')

  const navigate = useNavigate()

  function handleAddLink(){
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }
  
  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }
  
  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {
    if (!title) {
      return alert('Please enter a title to save changes')
    }
    
    if (newLink) {
      return alert("You left a Link unsaved, save it or delete to proceed.") 
    }

    if (newTag) {
      return alert("You left a Bookmark (New Tag) unsaved, save it or delete to proceed.") 
    }
    await api.post("/notes", {
      title,
      description,
      tags,
      links
    })

    alert("New note created!")
    navigate("/")

  }

  return (
    <Container>
      <Header/>

      <main>
        <Form>
          <header>
            <h1>Create note</h1>
            <Link to="/">Back</Link>
          </header>

          <Input 
            placeholder='Title'
            onChange={e => setTitle(e.target.value)}

          />
          <Textarea 
            placeholder='Observations'
            onChange={e => setDescription(e.target.value)}
            
          />

          <Section title='Useful Links'/>
          {
            links.map((link, index) => (
              <NoteItem 
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />) 
            )
          }

            <NoteItem
              isNew 
              placeholder='New link'
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />

          <Section title='Bookmarks'/>
            <div className="tags">
              {
                tags.map((tag, index) =>(
                  <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
                <NoteItem 
                  isNew 
                  placeholder='New tag'
                  onChange={e => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                  />
            </div>
          
          <Button 
            title="Save"
            onClick={handleNewNote}
          />

        </Form>
      </main>
    </Container>
  )
}