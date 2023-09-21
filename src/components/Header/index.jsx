import { Container } from "./styles";

 import { HeaderMobile } from "../HeaderMobile";
import { HeaderDesktop } from "../HeaderDesktop";

export function Header({ isAdmin = false, onChange }) {
  return(
    <Container>
      <HeaderMobile isAdmin={isAdmin} onChange={onChange} className="mobile" />
      <HeaderDesktop isAdmin={isAdmin} onChange={onChange} className="desktop" />
    </Container>
  )
}