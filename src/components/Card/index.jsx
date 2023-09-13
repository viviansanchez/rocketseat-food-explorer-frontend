import { Container, Description, Price, CounterAndButton } from "./styles";
import img from '../../assets/ravanello-salad.png'

import { CardDishTitle } from "../CardDishTitle";
import { Button } from "../Button";
import { Counter } from "../Counter";

import { PiHeartBold, PiPencilSimpleBold } from 'react-icons/pi'

import { Link } from "react-router-dom";

export function Card({ isAdmin = false, title, description, price }) {
  //add on click function to <3 and btn with alert "feature in development"
  return(
    <Container>
      {
        isAdmin ? 
          <Link to="/dishes/edit/5" className="top-icon"><PiPencilSimpleBold /></Link> :
          <button type="button" className="top-icon"><PiHeartBold /></button>  
          // /dishes/edit/5 is static for now, will be changed when i connect the api 
      }

      <img src={img} alt="example image" />

      <CardDishTitle to="/dishes/5" title={"Salada Ravanello"} />
      {/* /dishes/5 is static for now, will be changed when i connect the api */}

      <Description>
        a respeito da salada
        {/* {description} */}
      </Description>

      <Price>
        R$49,90
        {/* {price} */}
      </Price>

      {!isAdmin &&
        <CounterAndButton>
          {/* <div>counter comp</div> */}
          <Counter />
          {/* counter component */}
          <Button type="button" title={"incluir"} />
        </CounterAndButton> 
      }
      
    </Container>
  )
}