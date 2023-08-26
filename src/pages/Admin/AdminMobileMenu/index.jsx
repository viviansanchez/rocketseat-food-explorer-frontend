import { Container, Header, Main } from "./styles"

import { Input } from "../../../components/Input"
import { MobileMenuLink } from "../../../components/MobileMenuLink"
import { Footer } from "../../../components/Footer"

import { PiXBold, PiMagnifyingGlassBold } from 'react-icons/pi'

// maybe this page should be turne into a component instead of a page!! 

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
        <MobileMenuLink page={"/newdish"} title={"Novo prato"}/>
        <MobileMenuLink page={"/"} title={"Sair"}/>
      </Main>
      <Footer />

    </Container>
  )
}