import { Container } from "./styles";

import { Link } from "react-router-dom";

  export function MobileNavbarLink({ title, page }) {
  return(
    <Container>
      <Link to={page}>{title}</Link>
    </Container>
  )
}