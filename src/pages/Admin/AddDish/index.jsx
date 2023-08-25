import { Container, Main, Form } from "./styles";

import { MobileNavbar } from '../../../components/MobileNavbar'
import { DesktopNavbar } from '../../../components/DesktopNavbar'
import { InputImage } from "../../../components/InputImage";
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import { FormSection } from '../../../components/FormSection'
import { RegisterTag } from '../../../components/RegisterTag'
import { TextArea } from '../../../components/TextArea'
import { Button } from '../../../components/Button'
import { Footer } from '../../../components/Footer'

export function AddDish(){

  return(
    <Container>
      <MobileNavbar isAdmin />
      {/* <DesktopNavbar isAdmin /> */}
      {/* again, these above are here for now, will resolve this later */}

      <Main>
        {/* PreviousPageLink component - create when routing is done */}
        <a href="#">VOLTAR</a>

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
              <RegisterTag value={"cebola"} />
              <RegisterTag isNew />
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