import {FiPlus, FiSearch} from 'react-icons/fi';

import {Container, Brand, Menu, Search, Content, NewNote} from "./styles";

import { Note } from "../../components/Notes"
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"

export function Home(){
    return (
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
                <li><ButtonText title="All" /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="NodeJS" /></li>

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
            
            <NewNote>
                <FiPlus/>Create Note
            </NewNote>

        </Container>
    )
}