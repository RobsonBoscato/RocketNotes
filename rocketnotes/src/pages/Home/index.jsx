import { useState, useEffect } from 'react';
import {FiPlus, FiSearch} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import {Container, Brand, Menu, Search, Content, NewNote} from "./styles";

import { api } from '../../services/api';
import { Note } from "../../components/Notes"
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"

export function Home(){
    const [search, setSearch] = useState('')
    const [notes, setNotes] = useState([])
    const [tags, setTags] = useState([])
    const [tagSelected, setTagsSelected] = useState([])

    const navigate = useNavigate()

    function handleTagSelected(tagName) {
        const alreadySelected = tagSelected.includes(tagName)

        if (tagName === 'all') {
            return setTagsSelected([])
        }

        if (alreadySelected) {
            const filteredTags = tagSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags)
            
        } else {
            setTagsSelected((prevState => [...prevState, tagName]))
        }
    }

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags(){
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags()
    }, [])

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`)
            setNotes(response.data)
        }

        fetchNotes()

    }, [tagSelected, search])

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
                        onClick={() => handleTagSelected('all')}
                        isActive={tagSelected.length === 0}
                        />
                </li>
                {
                    tags && tags.map(tag => (                     
                        <li key={String(tag.id)}>
                        <ButtonText 
                            title={tag.name} 
                            onClick={() => handleTagSelected(tag.name)}
                            isActive={tagSelected.includes(tag.name)}
                        />
                    </li>
                    ))
                }
            </Menu>

            <Search>
                <Input 
                    icon={FiSearch}
                    placeholder="Search Notes by Title" 
                    onChange={(e) => setSearch(e.target.value)}

                />
            </Search>

            <Content>                
                <Section title="My Notes">
                    {
                        notes.map(note => (
                            <Note 
                                key={String(note.id)}
                                data={note}
                                onClick={() => handleDetails(note.id)}
                            />
                        ))
                    }

                </Section>
            </Content>
            
            <NewNote to='/new'>
                <FiPlus/>Create Note
            </NewNote>
        </Container>
    )
}