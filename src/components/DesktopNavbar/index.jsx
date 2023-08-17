import { Container } from "./styles";

import { FiLogOut } from 'react-icons/fi'
import { PiReceipt, PiMagnifyingGlassBold } from "react-icons/pi";

import { NavbarLogo } from "../NavbarLogo";
import { Input } from "../Input"
import { Button } from "../Button";


export function DesktopNavbar({ isAdmin = false }) {

  return(
    <Container> 
      <NavbarLogo isAdmin={isAdmin} />
      <Input className="input" icon={PiMagnifyingGlassBold} placeholder="Busque por pratos ou ingredientes" />

      {
        isAdmin ? 
        <Button className="button" title={"Novo prato"}/> :
        <Button className="button" title={"Pedidos (0)"} icon={PiReceipt}/>
      }
      <a href="#" className="logout">
        <FiLogOut />
      </a>
      {/* usenavigate aqui */}
    </Container>
  )

}