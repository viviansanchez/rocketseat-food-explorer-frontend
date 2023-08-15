import { Container, Header, Main } from "./styles"

import { Input } from "../../../components/Input"
import { StyledLink } from "../../../components/StyledLink"
import { Footer } from "../../../components/Footer"

import { PiXBold, PiMagnifyingGlassBold } from 'react-icons/pi'

export function AdminMobileMenu() {

  return(
    <Container>
      <Header>
        <a href="#">
          <PiXBold /> 
        </a>
        {/* aqui usar use navigate -1 depois */}
        <p>Menu</p>
      </Header>
      <Main>
        <Input 
          type="text" 
          placeholder="Busque por pratos ou ingredientes"
          icon={PiMagnifyingGlassBold}
          className="teste"
        />
        <StyledLink page={"/newdish"} title={"Novo prato"}/>
        <StyledLink page={"/"} title={"Sair"}/>
      </Main>
      <Footer />

    </Container>
  )
}