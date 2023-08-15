import { Container, Main } from "./styles"

import { Footer } from "../../../components/Footer"
import { MobileNavbar } from "../../../components/MobileNavbar"

export function UserHome() {
  return(
    <Container>
      <MobileNavbar />
      <Main>
        {/* cta component */}
        {/* section 1 - refeições */}
        {/* section 2 - sobremesas */}
        {/* section 3 - bebidas */}
      </Main>
      <Footer />
    </Container>
  )
}