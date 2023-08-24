import { Container } from "./styles";

export function FormSection({ title, children, className }) {
  return(
    <Container className={className}>
      <h3>{title}</h3>
      {children}
    </Container>
  )
}