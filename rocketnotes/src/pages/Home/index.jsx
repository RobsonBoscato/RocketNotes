import {FiPlus, FiSearch} from 'react-icons/fi';

import {Container, Brand, Menu, Search, Content, NewNote} from "./styles";

import { Note } from "../../components/Notes"
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"

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
                <li><ButtonText title="React" isActive/></li>
                <li><ButtonText title="NodeJS" /></li>

            </Menu>

            <Search>
                <Input icon={FiSearch} placeholder="Search Notes by Title" />

            </Search>

            <Content>                
                <Section title="Minhas Notas">
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