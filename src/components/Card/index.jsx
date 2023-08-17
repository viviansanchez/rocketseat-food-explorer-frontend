import { Container, Description, Price, CounterAndButton } from "./styles";
import img from '../../assets/ravanello-salad.png'

import { CardDishTitle } from "../CardDishTitle";
import { Button } from "../Button";
import { Counter } from "../Counter";

import { PiHeartBold, PiPencilSimpleBold } from 'react-icons/pi'



export function Card({ isAdmin = false, title, description, price }) {
  //add on click function to <3 and btn with alert "feature in development"
  return(
    <Container>
      {
        isAdmin ? 
          <a href="#" className="top-icon"><PiPencilSimpleBold /></a> :
          <button type="button" className="top-icon"><PiHeartBold /></button>  
      }

      <img src={img} alt="example image" />

      <CardDishTitle href="#" title={"Salada Ravanello"} />

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