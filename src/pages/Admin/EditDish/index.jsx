import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../../services/api";

import { Container, Main, Form } from "./styles";

import { Header } from '../../../components/Header'
import { PreviousPageNavigate } from "../../../components/PreviousPageNavigate"
import { InputImage } from "../../../components/InputImage";
import { Input } from '../../../components/Input'
import { Select } from '../../../components/Select'
import { FormSection } from '../../../components/FormSection'
import { RegisterTag } from '../../../components/RegisterTag'
import { TextArea } from '../../../components/TextArea'
import { Button } from '../../../components/Button'
import { Footer } from '../../../components/Footer'

export function EditDish() {
  const [data, setData] = useState(null)
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const params = useParams()
  const navigate = useNavigate()

  function handleAddIngredient() {
    const newIngredientObject = { id: null, name: newIngredient, dish_id: data.id } 

    setIngredients(prevState => [...prevState, newIngredientObject])
    setNewIngredient("")
    
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  async function handleUpdateDish() {
    if(typeof image == "string"){
      return alert ("É necessário refazer o upload da imagem atual, ou fazer upload de uma nova imagem")
    }

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

    const ingredientsNames = ingredients.map(ingredient => ingredient.name)
    console.log(ingredientsNames)

    const formData = new FormData()

    formData.append("image", image)
    formData.append("title", title)
    formData.append("category", category)
    formData.append("ingredients", ingredientsNames)
    formData.append("price", price)
    formData.append("description", description)

    try {
      await api.put(`/dishes/${params.id}`, formData)
      alert("Prato editado com sucesso!")
      navigate("/")
    } catch(err) {
      if(err.response){
        alert(err.response.data.message)
      } else {
        alert("Não foi possível cadastrar o prato")
      }
    }
  }

  async function handleDeleteDish() {
    const confirm = window.confirm("Deseja realmente remover este prato? Esta ação não pode ser desfeita.")

    if(confirm) {
      await api.delete(`/dishes/${params.id}`)
      navigate("/")
    }
  }

  useEffect(() => {
    async function fetchDish() {

      try {
      const response = await api.get(`dishes/${params.id}`)
      setData(response.data)
      setImage(response.data.image)
      setTitle(response.data.title)
      setCategory(response.data.category)
      setIngredients(response.data.ingredients)
      setPrice(response.data.price)
      setDescription(response.data.description)

      } catch(err) {
        return console.error(err.message)
      }
    }

    fetchDish()
  }, [])

  return(
    <Container>
      <Header isAdmin />

      <Main>
        <PreviousPageNavigate />

        <h1>Editar prato</h1>

        <Form>
          <InputImage 
            label="Imagem do prato" 
            description="Selecione imagem para alterá-la"
            className="grid-image"
            onChange={e => setImage(e.target.files[0])}
          />

          <Input 
            className="change-input-style grid-name" 
            label="Nome" 
            placeholder={"Ex: Salada Ceasar"} 
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
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
                  value={ingredient.name}
                  onClick={() => handleRemoveIngredient(ingredient)}
                />
                ))
            }
              <RegisterTag 
                $isNew
                value={newIngredient}
                onChange={e => setNewIngredient(e.target.value)}
                onClick={handleAddIngredient}
              />
            </div>
          </FormSection>

          <Input 
            className="change-input-style grid-price" 
            label="Preço" 
            placeholder="R$40,00"
            value={price}
            onChange={e => setPrice(e.target.value)}
            type="text"
          />

          <TextArea 
            className="grid-textarea" 
            label="Descrição" 
            placeholder="A Salada Ceasar é uma opção refrescante para o verão" 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          
          <div className="grid-btn btn-wrapper">
            <Button title="Excluir prato" onClick={handleDeleteDish}/>
            <Button title="Salvar alterações" onClick={handleUpdateDish}/>
          </div>
        </Form>

      </Main>

      <Footer />
    </Container>
  )
}