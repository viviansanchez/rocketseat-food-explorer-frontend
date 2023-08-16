import { Container } from "./styles";

import img from '../../assets/banner-macarons.png'

export function Banner() {
  return(
    <Container>
      <img src={img} alt="macarons de diferentes sabores, com frutas vermelhas ao redor" />
      <div>
        <h2>Sabores inigualáveis</h2>
        <h3>Sinta o cuidado do preparo com ingredientes selecionados</h3>
      </div>
    </Container>
  )
}