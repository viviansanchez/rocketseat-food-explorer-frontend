import { Container } from "./styles";

import { HeaderLogo } from "../HeaderLogo"

import { PiListBold, PiReceipt } from 'react-icons/pi'

export function HeaderMobile({ isAdmin = false, className }) {

  return(
    <Container className={className}>
      <a href="#">
        <PiListBold className="list-svg"/>
      </a>
      {/* useNavigate/Link here in the future! */}
      <HeaderLogo isAdmin={isAdmin} />
      {!isAdmin &&
        <div className="receipt">
          <PiReceipt className="receipt-svg" />
          <span>0</span>
        </div>
      }
    </Container>
  )
}