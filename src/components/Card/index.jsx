import { Container, Description, Price, CounterAndButton } from "./styles";

import { CardDishTitle } from "../CardDishTitle";
import { Button } from "../Button";
import { Counter } from "../Counter";

import { PiHeartBold, PiPencilSimpleBold } from 'react-icons/pi'

import { Link } from "react-router-dom";

import { api } from "../../services/api";

export function Card({ isAdmin = false, data }) {
  //add on click function to <3 and btn with alert "feature in development"

  const image = `${api.defaults.baseURL}/files/${data.image}`
  //know issue: this is not working. error: get 404 not found.

  return(
    <Container>
      {
        isAdmin ? 
          <Link to={`/dishes/edit/${data.id}`} className="top-icon"><PiPencilSimpleBold /></Link> :
          <button type="button" className="top-icon"><PiHeartBold /></button>  
      }

      <img 
        // src={`${api.defaults.baseURL}/files/${data.image}`} -> not working either
        src={image}
        alt={`Imagem do prato ${data.title}`} 
      />

      <CardDishTitle to={`/dishes/${data.id}`} title={data.title} />

      <Description>
        {data.description}
      </Description>

      <Price>
        {data.price}
      </Price>

      {!isAdmin &&
        <CounterAndButton>
          <Counter />
          <Button type="button" title={"incluir"} />
        </CounterAndButton> 
      }
      
    </Container>
  )
}