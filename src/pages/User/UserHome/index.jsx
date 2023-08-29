import { Container, Main } from "./styles"

import { Header } from "../../../components/Header"
import { Banner } from "../../../components/Banner"
import { Carousel } from "../../../components/Carousel"
import { Footer } from "../../../components/Footer"

export function UserHome() {
  return(
    <Container>
      <Header />
      
      <Main>
        <Banner className="banner" />

        <Carousel title="Refeições"/>
          
        <Carousel className="margin-top" title="Sobremesas"/>
        
        <Carousel className="margin-top" title="Bebidas"/>

      </Main>
      <Footer />
    </Container>
  )
}