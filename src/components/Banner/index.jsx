import { Container } from "./styles";

import img from '../../assets/banner-macarons.png'

export function Banner({ className }) {
  return(
    <Container className={className}>
      <img src={img} alt="macarons de diferentes sabores, com frutas vermelhas ao redor" />
      <div>
        <h3>Sabores inigualáveis</h3>
        <h4>Sinta o cuidado do preparo com ingredientes selecionados</h4>
      </div>
    </Container>
  )
}