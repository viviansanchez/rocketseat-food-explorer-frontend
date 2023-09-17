import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api"

import { Container, Form } from "./styles"

import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";


export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    if(!name || !email || !password){
      return alert("É necessário preencher todos os campos!")
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
      })
      .catch(err => {
        if(err.response){
          alert(err.response.data.message)
        } else {
          alert("Não foi possível fazer o cadastro")
        }
      })

  }

  return(
    <Container>
      <Logo />

      <Form>
        <h1>Crie sua conta</h1>
        <Input 
          type="text"
          label={"Seu nome"} 
          placeholder={"Exemplo: Maria da Silva"}
          onChange={e => setName(e.target.value)}
        />

        <Input 
          type="email"
          label={"Email"}
          placeholder={"Exemplo: exemplo@email.com.br"}
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          type={"password"}
          label={"Senha"}
          placeholder={"No mínimo 6 caracteres"}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title={"Criar conta"} onClick={handleSignUp}/>

        <Link to={"/"}>Já tenho uma conta</Link>
    
      </Form>
    </Container>
  )
}