import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../../services/api";

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
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate()

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient])
    setNewIngredient("")
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleNewDish() {
    if(!image) {
      return alert("É necessário inserir uma foto do prato")
    } 

    if(!title) {
      return alert("É necessário digitar o nome do prato")
    }

    if(category == "") {
      return alert("É necessário escolher a categoria do prato")
    }

    if(newIngredient) {
      return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio")
    }

    if(ingredients.length === 0){
      return alert("É necessário adicionar ao menos um ingrediente")
    }

    if(!price) {
      return alert("É necessário digitar o preço do prato")
    }

    if(!description) {
      return alert("É necessário digitar a descrição do prato")
    }

    const formData = new FormData()

    formData.append("image", image)
    formData.append("title", title)
    formData.append("category", category)
    formData.append("ingredients", ingredients)
    formData.append("price", price)
    formData.append("description", description)

    try {
      await api.post("/dishes", formData)
      alert("Prato criado com sucesso!")
      navigate("/")
    } catch(err) {
      if(err.response){
        alert(err.response.data.message)
      } else {
        alert("Não foi possível cadastrar o prato")
      }
    }

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
            onChange={e => setImage(e.target.files[0])}
          />

          <Input 
            className="change-input-style grid-name" 
            label="Nome" 
            placeholder="Ex: Salada Ceaser" 
            type="text"
            onChange={e => setTitle(e.target.value)}
          />

          <Select 
            className="grid-category" 
            label="Categoria" 
            state={category}
            onChange={e => setCategory(e.target.value)}
          />
          
          <FormSection className="grid-ingredients ingredients" title="Ingredientes">
            <div>
              {
                ingredients.map((ingredient, index) => (
                  <RegisterTag 
                    key={index}
                    value={ingredient}
                    onClick={() => handleRemoveIngredient(ingredient)}
                  />
                ))
              }

              <RegisterTag 
                $isNew 
                placeholder="Adicionar"
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </FormSection>

          <Input 
            className="change-input-style grid-price" 
            label="Preço" 
            placeholder="R$00,00"
            type="text"
            onChange={e => setPrice(e.target.value)}
          />

          <TextArea 
            label="Descrição" 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" 
            className="grid-textarea" 
            onChange={e => setDescription(e.target.value)}
          />

          <Button 
            className="grid-btn" 
            title="Salvar alterações"
            onClick={handleNewDish}
          />
        </Form>

      </Main>

      <Footer />

    </Container>
  )
}