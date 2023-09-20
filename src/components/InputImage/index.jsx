import { Container } from "./styles";

import { PiUploadSimple } from 'react-icons/pi'

import { useId } from "react";

export function InputImage({ label, description, className, onChange }){
  const id = useId()

  return(
    <Container className={className}>
      <label htmlFor={id}>
        {label}
        <input 
          type="file" 
          id={id} 
          onChange={onChange}
        />
        <div>
          <PiUploadSimple />
          <p>{description}</p>
        </div>
      </label>
    </Container>
  )
}