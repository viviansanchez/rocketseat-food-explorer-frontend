import { Container, Main, Meals, Desserts, Drinks } from "./styles"

import { MobileNavbar } from "../../../components/MobileNavbar"
import { DesktopNavbar } from "../../../components/DesktopNavbar"
import { Banner } from "../../../components/Banner"
import { SectionTitle } from "../../../components/SectionTitle"
import { Card } from "../../../components/Card"
import { Footer } from "../../../components/Footer"

export function UserHome() {
  return(
    <Container>
      <MobileNavbar />
      {/* <DesktopNavbar isAdmin /> this is here for later - change navbar based on screen (breakpoint chosen for this app is 768px) */}
      
      <Main>
        <Banner className="banner" />

        <Meals>
          <SectionTitle title={"Refeições"} />
          <Card />
        </Meals>

        <Desserts>
          <SectionTitle title={"Sobremesas"} />
          <Card isAdmin />
        </Desserts>

        <Drinks>
          <SectionTitle title={"Bebidas"} />
          <Card />
        </Drinks>

        {/* in each section instead of a single card, will be Swiper lib! */}
        
        {/* maybe later change this and create a section component if possible? depends on how it will works with the api. Leaving like this for now, but will leave comment here for later */}
      </Main>
      <Footer />
    </Container>
  )
}