import { Container, Links } from "./styles"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"

export function Details() {
  return (
    <Container>
    <Header/>

    <ButtonText title="Excluir Nota" />

    <Section title="Links úteis">
      <Links>
        <li><a href="#">https:/rocketseat.com.br</a></li>
        <li><a href="#">https:/rocketseat.com.br</a></li>
      </Links>
    </Section>

    <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
    </Section>

    <Button title="Voltar"/>
    </Container>
  )
}