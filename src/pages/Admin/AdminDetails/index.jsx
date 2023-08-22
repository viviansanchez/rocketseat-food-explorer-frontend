import { Container, Main, DishInfo } from "./styles";

import img from "../../../assets/ravanello-salad.png"

import { PiReceipt } from 'react-icons/pi'

import { MobileNavbar } from "../../../components/MobileNavbar"
import { DesktopNavbar } from "../../../components/DesktopNavbar"
import { Tag } from "../../../components/Tag"
import { Button } from "../../../components/Button"
import { Footer } from "../../../components/Footer"

export function AdminDetails() {
  return(
    <Container>
      <MobileNavbar isAdmin />
      {/* <DesktopNavbar isAdmin /> */}

      <Main>
        {/* PreviousPageLink component - create when routing is done */}
        <a href="#">VOLTAR</a>

        <div className="content-wrapper">
          <img src={img} alt="placeholder dish" />

          <div className="divider-for-desktop-layout">
            <DishInfo>
              <h2>Salada Ravanello</h2>
              <p>Informações a respeito da salada</p>
              <div className="tags-container">
                <Tag title={"exemplo"} />
                <Tag title={"exemplo"} />
                <Tag title={"exemplo"} />
                <Tag title={"exemplo"} />
              </div>
              {/* tags component --> when api ready, map to show tags */}
            </DishInfo>

            <Button title={"Editar prato"} />
            {/* future useNavigate on this button */}
          </div>
        </div>
        

        
      </Main>
      
      <Footer />
    </Container>
  )
}