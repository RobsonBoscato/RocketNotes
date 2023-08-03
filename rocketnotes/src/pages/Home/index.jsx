import { useState, useEffect } from 'react';
import {FiPlus, FiSearch} from 'react-icons/fi';

import {Container, Brand, Menu, Search, Content, NewNote} from "./styles";

import { api } from '../../services/api';
import { Note } from "../../components/Notes"
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"

export function Home(){
const [tags, setTags] = useState([])


useEffect(() => {
    async function fetchTags(){
      const response = await api.get("/tags")  
      setTags(response.data)
    }

    fetchTags()
}, [])

    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
                <li>
                    <ButtonText
                        title="All"
                        isActive
                    />
                </li>
                {
                    tags && tags.map(tag => (                     
                        <li key={String(tag.id)}>
                        <ButtonText 
                            title={tag.name} 
                        />
                    </li>
                    ))
                }

            </Menu>

            <Search>
                <Input icon={FiSearch} placeholder="Search Notes by Title" />

            </Search>

            <Content>                
                <Section title="My Notes">
                    <Note data={{
                        title: 'React', 
                        tags: [
                            {id: '1', name: 'React'},
                            {id: '2', name: 'ExpressJS'}
                        ]
                    }} 
                    />
                </Section>
            </Content>
            
            <NewNote to='/new'>
                <FiPlus/>Create Note
            </NewNote>

        </Container>
    )
}