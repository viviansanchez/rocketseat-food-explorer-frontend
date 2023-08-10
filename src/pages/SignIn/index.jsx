import { Container, Form } from "./styles";

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";

export function SignIn() {

  return(
    <Container>
      
      <Logo />
      <Form>
       <p>teste</p>

        {/* input
        input 
        button 
        link (react router dom) */}
        
        <Button
        title={"Entrar"} 
        />
      </Form>
    </Container>
  )
}