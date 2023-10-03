import { Container } from "./styles";

import { PiXBold, PiPlusBold } from 'react-icons/pi'

export function RegisterTag({ $isNew, value, onClick, ...rest }) {
  return(
    <Container $isNew={$isNew}>
      <input
        type="text"
        value={value}
        readOnly={!$isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        {$isNew ? <PiPlusBold /> : <PiXBold />}
      </button>
    </Container>
  )
}