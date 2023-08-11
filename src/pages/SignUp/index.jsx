import { Container, Form } from "./styles"

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";

export function SignUp() {

  return(
    <Container>
      <Logo />

      <Form>
        <h1>Crie sua conta</h1>
        <Input 
          type="text"
          label={"Seu nome"} 
          placeholder={"Exemplo: Maria da Silva"}
        />

        <Input 
          type="email"
          label={"Email"}
          placeholder={"Exemplo: exemplo@email.com.br"}
        />

        <Input 
          type={"password"}
          label={"Senha"}
          placeholder={"No mínimo 6 caracteres"}
        />

        <Button title={"Criar conta"}/>

        <a href="#">Já tenho uma conta</a>

        {/* <Link to={"/"}>Já tenho uma conta</Link> */}
    
      </Form>
    </Container>
  )
}