import { Container } from "./styles";

import { PiPlusBold, PiMinusBold } from 'react-icons/pi'

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(1)

  let paddedCount = String(count).padStart(2, "0")

  function handleDecrement() {
    count <= 0 ? alert("Não é possível adicionar valores negativos") : setCount(count - 1)
  }

  function handleIncrement() {
    setCount(count + 1)
  }

  return(
    <Container>
      <button type="button" onClick={handleDecrement}>
        <PiMinusBold />
      </button>

      <span>{paddedCount}</span>

      <button type="button" onClick={handleIncrement}>
        <PiPlusBold />
      </button>
    </Container>
  )
}