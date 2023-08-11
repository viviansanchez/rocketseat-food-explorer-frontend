import { Container, Form } from "./styles";

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";

export function SignIn() {

  return(
    <Container>
      <Logo />

      <Form>
        <h1>Faça login</h1>
        <Input 
          type="email"
          label={"Email"} 
          placeholder={"Exemplo: exemplo@exemplo.com.br"} 
        />
        <Input 
          type="password"
          label={"Senha"} 
          placeholder={"No mínimo 6 caracteres"} 
        />
        <Button
        title={"Entrar"} 
        />

        <a href="#">Criar uma conta</a>

        {/* <Link to={"/register"}>
          Criar uma conta
        </Link> */}
        
      </Form>
    </Container>
  )
}