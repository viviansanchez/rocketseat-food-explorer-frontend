import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { PiCaretLeftBold } from 'react-icons/pi'

export function PreviousPageNavigate() {
  const navigate = useNavigate()

  function handlePreviousPage() {
    navigate(-1)
  }

  return(
    <Container onClick={handlePreviousPage}>
      <PiCaretLeftBold />
      <p>voltar</p>
    </Container>
  )
}