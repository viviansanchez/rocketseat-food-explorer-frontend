import { Container, Form } from "./styles";

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn() {

  return(
    <Container>
      <Logo />

      <Form>
        <h1>Faça login</h1>
        <Input label={"Email"} placeholder={"Exemplo: exemplo@exemplo.com.br"} />
        <Input label={"Senha"} placeholder={"No mínimo 6 caracteres"} />
        <Button
        title={"Entrar"} 
        />

        {/*link (react router dom) */}
      </Form>
    </Container>
  )
}