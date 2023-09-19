import { Container } from "./styles";

import { useId } from "react";

export function Select({ label, className, state, onChange }) {
  const id = useId()

  return(
    <Container className={className}>
      <label htmlFor={id}>{label}</label>
      <select 
        id={id}
        onChange={onChange}
        defaultValue={state}
      >
        <option value="" disabled>-- escolha uma categoria --</option> 
        <option value="meal">Refeições</option>
        <option value="dessert">Sobremesas</option>
        <option value="drink">Bebidas</option>
      </select>
    </Container>
  )
}