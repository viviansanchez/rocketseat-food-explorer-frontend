import { Container, Main } from "./styles"

import { Header } from "../../../components/Header"
import { Banner } from "../../../components/Banner"
import { Carousel } from "../../../components/Carousel"
import { Footer } from "../../../components/Footer"

export function AdminHome() {
  return(
    <Container>
      <Header isAdmin />
      
      <Main>
        <Banner className="banner" />

        <Carousel title="Refeições" isAdmin/>
        <Carousel className="margin-top" title="Sobremesas" isAdmin/>
        <Carousel className="margin-top" title="Bebidas" isAdmin/>

      </Main>
      <Footer />
    </Container>
  )
}