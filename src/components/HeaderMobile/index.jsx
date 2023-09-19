import { Container } from "./styles";

import { HeaderLogo } from "../HeaderLogo"
import { MobileNavbar } from "../MobileNavbar"
import { Input } from "../Input"
import { MobileNavbarLink } from "../MobileNavbarLink"

import { PiListBold, PiReceipt, PiMagnifyingGlassBold } from 'react-icons/pi'

import { useAuth } from "../../hooks/auth";

export function HeaderMobile({ isAdmin = false, className }) {
  const { SignOut } = useAuth()

  function handleNavbarToggle() {
    //função que troca o display (atraves de classe --> toggle) -- fica no hamburguer e no x (precisa passar ela quando chamar o mobilenavbar) 
    //importante remover o scroll da página porque aparece o resto por baixo... pesquisar a respeito de como fazer isso
    //https://stackoverflow.com/questions/54989513/react-prevent-scroll-when-modal-is-open
    //outra questão aqui, quando clicar no mobilenavbar link a navbar precisa fechar!!!!
    console.log('oi')
  }
  return(
    <Container className={className}>

      { isAdmin &&
        <MobileNavbar 
          onClick={handleNavbarToggle} 
          className="toggle-navbar-display"
        >
          <Input 
            type="text" 
            placeholder="Busque por pratos ou ingredientes"
            icon={PiMagnifyingGlassBold}
          />
          <MobileNavbarLink page={"/dishes/new"} title={"Novo prato"}/>
          <MobileNavbarLink page={"/"} title={"Sair"} onClick={SignOut}/>
          {/* check later if I have to change this for logout to work*/}
        </MobileNavbar>
      }

      { !isAdmin &&
        <MobileNavbar 
          onClick={handleNavbarToggle}
          className="toggle-navbar-display"
        >
          <Input 
            type="text" 
            placeholder="Busque por pratos ou ingredientes"
            icon={PiMagnifyingGlassBold}
          />
          <MobileNavbarLink page={"/"} title={"Sair"}/>
          {/* check later if I have to change this for logout to work */}
        </MobileNavbar>
      }
      

      <button className="navbar-btn"> 
        <PiListBold className="list-svg"/>
      </button>
      
      {/* useNavigate/Link here in the future! agora nao mais pq a ideia é outra!! --> agora o icone é botao e nao link!!!*/}
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