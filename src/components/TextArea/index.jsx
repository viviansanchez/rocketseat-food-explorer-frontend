import { Container } from "./styles";

import { useId } from "react";

export function TextArea({label, className, ...rest }) {
  const id = useId()


  return(
    <Container className={className}>
      {
        label &&
        <label htmlFor={id}>{label}</label>
      }
      <textarea id={id} {...rest}></textarea>
    </Container>
  )
}