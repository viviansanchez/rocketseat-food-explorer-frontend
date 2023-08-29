import { Container } from "./styles";

 import { HeaderMobile } from "../HeaderMobile";
import { HeaderDesktop } from "../HeaderDesktop";

export function Header({ isAdmin = false }) {
  return(
    <Container>
      <HeaderMobile isAdmin={isAdmin} className="mobile" />
      <HeaderDesktop isAdmin={isAdmin} className="desktop" />
    </Container>
  )
}