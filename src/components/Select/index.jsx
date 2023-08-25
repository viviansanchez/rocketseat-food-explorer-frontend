import { Container } from "./styles";

import { useId } from "react";

export function Select({ label, className }) {
  const id = useId()

  return(
    <Container className={className}>
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        <option selected disabled>-- escolha uma categoria --</option>
        <option value="meal">Refeições</option>
        <option value="dessert">Sobremesas</option>
        <option value="drinks">Bebidas</option>
      </select>
    </Container>
  )
}