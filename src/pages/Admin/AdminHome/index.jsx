import { Container, Main } from "./styles"

import { MobileNavbar } from "../../../components/MobileNavbar"
import { DesktopNavbar } from "../../../components/DesktopNavbar"
import { Banner } from "../../../components/Banner"
import { Carousel } from "../../../components/Carousel"
import { Footer } from "../../../components/Footer"

export function AdminHome() {
  return(
    <Container>
      <MobileNavbar isAdmin />
      {/* <DesktopNavbar isAdmin /> this is here for later - change navbar based on screen (breakpoint chosen for this app is 768px) */}
      
      <Main>
        <Banner className="banner" />

        <Carousel title={"Teste!!!"} isAdmin/>
        <Carousel className="margin-top" title={"Teste!!!"} isAdmin/>
        <Carousel className="margin-top" title={"Teste!!!"} isAdmin/>

      </Main>
      <Footer />
    </Container>
  )
}