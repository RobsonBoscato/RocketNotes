import { Container, Links } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/buttons";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";


export function Details() {

  return (
  
    <Container>
     <Header/>

     <Section title = "Useful links">
      <Links>
        <li> <a href="#">https://www.rocketseat.com.br/</a></li>
        <li> <a href="#">https://www.rocketseat.com.br/</a></li>
      </Links>
     </Section>

     <Section title = "Bookmarks">
      <Tag title ="Express"> </Tag>
      <Tag title ="NodeJS"> </Tag>
      <Tag title ="ReactJS"> </Tag>
      <Tag title ="TypeScript"> </Tag>


     </Section>

      <Button title = "Back"/>
    </Container>
  )
}