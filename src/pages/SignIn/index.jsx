import { Container, Form } from "./styles";

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { PiX } from 'react-icons/pi'

export function SignIn() {

  return(
    <Container>
      
      <Logo />
      <Form>
       

        {/* input
        input 
        button 
        link (react router dom) */}
        <Input label={"testando"} placeholder={"placeholder"} />
        <Input label={"outro teste"} icon={PiX} />
        <Button
        title={"Entrar"} 
        />
      </Form>
    </Container>
  )
}