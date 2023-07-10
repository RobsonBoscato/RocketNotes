import { Container, Links, Content } from "./styles";

import { Header } from "../../components/Header";
import { Button } from "../../components/buttons";
import { ButtonText } from "../../components/ButtonText";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";


export function Details() {

  return (
  
    <Container>
     <Header/>

    <main>
      <Content>
        <ButtonText title="Delete Note"/>

          <h1>React Introduction</h1>
          
          <p>
            ReactJS is a JavaScript library used for building user interfaces. It was developed and is maintained by Facebook and is commonly used for building single-page applications and mobile applications. ReactJS allows developers to create reusable UI components and manage the state of those components in an efficient way. <br /><br />

            ReactJS is known for its ability to handle complex and interactive user interfaces with ease. It uses a virtual DOM (Document Object Model) which allows it to efficiently update and render components, resulting in faster performance and smoother user experience. <br/>

            ReactJS is also highly flexible and can be used with other libraries and frameworks. Overall is a popular choice for developers looking to create dynamic and responsive user interfaces.
          </p>

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
      
      </Content>
    </main>

    </Container>
  )
}