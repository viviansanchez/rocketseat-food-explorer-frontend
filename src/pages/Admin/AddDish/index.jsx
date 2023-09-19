import { useState } from "react";

import { Container, Main, Form } from "./styles";

import { Header } from '../../../components/Header'
import { PreviousPageNavigate } from "../../../components/PreviousPageNavigate";
import { InputImage } from "../../../components/InputImage";
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import { FormSection } from '../../../components/FormSection'
import { RegisterTag } from '../../../components/RegisterTag'
import { TextArea } from '../../../components/TextArea'
import { Button } from '../../../components/Button'
import { Footer } from '../../../components/Footer'

export function AddDish(){
  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  return(
    <Container>
      <Header isAdmin />

      <Main>
        <PreviousPageNavigate />

        <h1>Novo prato</h1>

        <Form>
          <InputImage 
            label="Imagem do prato" 
            description="Selecione imagem"
            className="grid-image"
          />

          <Input 
            className="change-input-style grid-name" 
            label="Nome" 
            placeholder="Ex: Salada Ceaser" 
            type="text"
          />

          <Select className="grid-category" label="Categoria" />
          
          <FormSection className="grid-ingredients ingredients" title="Ingredientes">
            <div>
              {
                tags.map((tag, index) => (
                  <RegisterTag 
                    key={index}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }

              <RegisterTag 
                isNew 
                placeholder="Adicionar"
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </FormSection>

          <Input 
            className="change-input-style grid-price" 
            label="Preço" 
            placeholder="R$00,00"
            type="text"
          />

          <TextArea 
            label="Descrição" 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
            className="grid-textarea" 
          />

          <Button className="grid-btn" title="Salvar alterações"/>
        </Form>

      </Main>

      <Footer />

    </Container>
  )
}