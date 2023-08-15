import { Container } from "./styles";

import { NavbarLogo } from "../NavbarLogo"

import { PiListBold, PiReceipt } from 'react-icons/pi'

export function MobileNavbar({ isAdmin = false }) {

  return(
    <Container>
      <a href="#">
        <PiListBold className="list-svg"/>
      </a>
      {/* useNavigate/Link here in the future! */}
      <NavbarLogo isAdmin={isAdmin} />
      {!isAdmin &&
        <div className="receipt">
          <PiReceipt className="receipt-svg" />
          <span>0</span>
        </div>
      }
      
    </Container>
  )
}