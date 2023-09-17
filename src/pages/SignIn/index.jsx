import { useState } from "react";

import { Container, Form } from "./styles";

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { SignIn } = useAuth()

  function handleSignIn() {
    SignIn({ email, password })
  }

  return(
    <Container>
      <Logo />

      <Form>
        <h1>Faça login</h1>

        <Input 
          type="email"
          label={"Email"} 
          placeholder={"Exemplo: exemplo@exemplo.com.br"} 
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          type="password"
          label={"Senha"} 
          placeholder={"No mínimo 6 caracteres"} 
          onChange={e => setPassword(e.target.value)}
        />
        
        <Button
          title={"Entrar"} 
          onClick={handleSignIn}
        />

        <Link to={"/register"}>
          Criar uma conta
        </Link>
        
      </Form>
    </Container>
  )
}