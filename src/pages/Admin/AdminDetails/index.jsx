import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

import { api } from "../../../services/api"

import { Container, Main, DishInfo } from "./styles"


import { PreviousPageNavigate } from "../../../components/PreviousPageNavigate"
import { Header } from "../../../components/Header"
import { Tag } from "../../../components/Tag"
import { Button } from "../../../components/Button"
import { Footer } from "../../../components/Footer"

//known issue: ${api.defaults.baseURL}/files/${data.image} not working..

export function AdminDetails() {
  const navigate = useNavigate()

  const params = useParams()
  const [data, setData] = useState(null)

  function handleEditDish() {
    navigate(`/edit/${params.id}`)
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`dishes/${params.id}`)
      setData(response.data)
    } 

    fetchDish()
  },[])

  return(
    <Container>
      <Header isAdmin/>

      { data &&
        <Main>

          <PreviousPageNavigate />

          <div className="content-wrapper">
            <img 
              src={`${api.defaults.baseURL}/files/${data.image}`} 
              alt={`imagem do prato ${data.title}`} 
            />

            <div className="divider-for-desktop-layout">
              <DishInfo>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <div className="tags-container">

                  {
                      data.ingredients.map(ingredient => (
                        <Tag key={ingredient.id} title={ingredient.name} />
                      ))                 
                  }
                 
                </div>
              </DishInfo>

              <Button 
                title={"Editar prato"} 
                onClick={handleEditDish}
              />
            </div>
          </div> 
        </Main>
      }

      <Footer />
    </Container>
  )
}