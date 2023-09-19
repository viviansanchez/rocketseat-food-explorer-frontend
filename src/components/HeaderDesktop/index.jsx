import { Container } from "./styles";

import { FiLogOut } from 'react-icons/fi'
import { PiReceipt, PiMagnifyingGlassBold } from "react-icons/pi";

import { HeaderLogo } from "../HeaderLogo";
import { Input } from "../Input"
import { Button } from "../Button";

import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

export function HeaderDesktop({ isAdmin = false, className }) {
  const { SignOut } = useAuth()
  const navigate = useNavigate()

  function handleSignOut() {
    SignOut()
    navigate("/")
  }

  return(
    <Container className={className}> 
      <HeaderLogo isAdmin={isAdmin} />
      <Input className="input" icon={PiMagnifyingGlassBold} placeholder="Busque por pratos ou ingredientes" />

      {
        isAdmin ? 
        <Link to="/dishes/new"> 
          <Button className="button" title={"Novo prato"} />
        </Link>
         :
        <Button className="button" title={"Pedidos (0)"} icon={PiReceipt}/>
      }
      <button
       className="logout"
       onClick={handleSignOut}
      >
        <FiLogOut />
      </button>

    </Container>
  )

}