import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { api } from "../../../services/api";

import { Container, Main, DishInfo, CounterAndButtonContainer } from "./styles";

import { PiReceipt } from 'react-icons/pi'

import { PreviousPageNavigate } from "../../../components/PreviousPageNavigate" 
import { Header } from "../../../components/Header"
import { Tag } from "../../../components/Tag"
import { Counter } from "../../../components/Counter"
import { Button } from "../../../components/Button"
import { Footer } from "../../../components/Footer"

export function UserDetails() {
  const params = useParams()
  const [data, setData] = useState(null)

  function handleOrder() {
    alert("Esta funcionalidade ainda não está disponível!")
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`)
      setData(response.data)
    }

    fetchDish()
  }, [])

  return(
    <Container>
      <Header />

      { data &&
        <Main>
          <PreviousPageNavigate />

          <div className="content-wrapper">
            <img 
              src={`${api.defaults.baseURL}/files/${data.image}`} 
              alt={`placeholder para o prato ${data.title}`} 
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

              <CounterAndButtonContainer>
                <Counter />
                <Button 
                  title={`pedir ∙ ${data.price}`} 
                  icon={PiReceipt} 
                  onClick={handleOrder}
                />
              </CounterAndButtonContainer>
            </div>
          </div>
          

          
        </Main>
      }

      <Footer />
    </Container>
  )
}