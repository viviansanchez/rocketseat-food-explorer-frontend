import { Container, Main } from "./styles"

import { Footer } from "../../../components/Footer"
import { MobileNavbar } from "../../../components/MobileNavbar"
import { DesktopNavbar } from "../../../components/DesktopNavbar"
import { Banner } from "../../../components/Banner"

export function UserHome() {
  return(
    <Container>
      <MobileNavbar />
      {/* <DesktopNavbar isAdmin /> */}
      
      <Main>
        <Banner className="banner" />
        {/* section 1 - refeições */}
        {/* section 2 - sobremesas */}
        {/* section 3 - bebidas */}
      </Main>
      <Footer />
    </Container>
  )
}