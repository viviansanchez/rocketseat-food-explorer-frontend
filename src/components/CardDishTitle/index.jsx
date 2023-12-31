import { Container } from "./styles";

import { PiCaretRightBold } from 'react-icons/pi'

export function CardDishTitle({ title, ...rest }) {

  return(
    <Container {...rest}>
      <p>{title}</p> 
      <PiCaretRightBold />
    </Container>
  )
}