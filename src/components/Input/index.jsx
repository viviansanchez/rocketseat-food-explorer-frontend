import { Container } from "./styles";

import { useId } from "react";

export function Input({ label, icon: Icon, className, ...rest }) {

  const id = useId()

  return(
    <Container className={className}>
      {
        label &&
        <label htmlFor={id}>{label}</label>
      }
      <div>
        {Icon && <Icon />}
        <input {...rest} id={id}/>
      </div>

    </Container>
  )
}

//the issue here is the id cannot be hard coded, bc if i have more than one input with label, then im gonna have 2 inputs with the same id -- which cant happen. 
//resolution with useId hook:
//https://react.dev/reference/react/useId
//https://www.youtube.com/watch?v=_vwCKV7f_eA (web dev simplified)