import { Container } from "./styles";

import { Link } from "react-router-dom";

  export function MobileNavbarLink({ title, page }) {
  return(
    <Container>
      {/* <a href={page}>{title}</a> */}
      <Link to={page}>{title}</Link>
    </Container>
  )
}