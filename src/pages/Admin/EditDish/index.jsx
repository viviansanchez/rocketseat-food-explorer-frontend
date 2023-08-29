import { Container, Main, Form } from "./styles";

import { Header } from '../../../components/Header'
import { InputImage } from "../../../components/InputImage";
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import { FormSection } from '../../../components/FormSection'
import { RegisterTag } from '../../../components/RegisterTag'
import { TextArea } from '../../../components/TextArea'
import { Button } from '../../../components/Button'
import { Footer } from '../../../components/Footer'

export function EditDish() {
  return(
    <Container>
      <Header isAdmin />

      <Main>
        {/* PreviousPageLink component - create when routing is done */}
        <a href="#">VOLTAR</a>

        <h1>Editar prato</h1>

        <Form>
          <InputImage 
            label="Imagem do prato" 
            description="Selecione imagem para alterá-la"
            className="grid-image"
          />

          <Input 
            className="change-input-style grid-name" 
            label="Nome" 
            placeholder="Salada Ceaser" 
            type="text"
          />

          <Select className="grid-category" label="Categoria" />
          
          <FormSection className="grid-ingredients ingredients" title="Ingredientes">
            <div>
              <RegisterTag value={"Pão Naan"} />
              <RegisterTag isNew />
            </div>
          </FormSection>

          <Input 
            className="change-input-style grid-price" 
            label="Preço" 
            placeholder="R$40,00"
            type="text"
          />

          <TextArea 
            label="Descrição" 
            placeholder="A Salada Ceasar é uma opção refrescante para o verão" 
            className="grid-textarea" 
          />
          
          <div className="grid-btn btn-wrapper">
            <Button title="Excluir prato"/>
            <Button title="Salvar alterações"/>
          </div>
        </Form>

      </Main>

      <Footer />
    </Container>
  )
}