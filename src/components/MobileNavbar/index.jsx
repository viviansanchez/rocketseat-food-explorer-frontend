import { Container, CloseBtnContainer, SearchAndLinksContainer } from "./styles";
import { Footer } from "../Footer";

import { PiXBold } from "react-icons/pi";

export function MobileNavbar({ className, onClick, children }) {
  return(
    <Container className={className}>
      <CloseBtnContainer>
        <button onClick={onClick}>
          <PiXBold />
        </button>
        <h3>Menu</h3>
      </CloseBtnContainer>    
        
      <SearchAndLinksContainer>
        {children}
      </SearchAndLinksContainer>  

      <Footer />
    </Container>
  )
}