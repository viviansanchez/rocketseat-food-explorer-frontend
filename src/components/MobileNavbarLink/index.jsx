import { Container } from "./styles";

import { Link } from "react-router-dom";

  export function MobileNavbarLink({ title, page, ...rest }) {
  return(
    <Container {...rest}>
      <Link to={page}>{title}</Link>
    </Container>
  )
}