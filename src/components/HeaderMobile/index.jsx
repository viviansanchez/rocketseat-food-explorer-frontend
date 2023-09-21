import { useState } from "react";

import { Container } from "./styles";

import { HeaderLogo } from "../HeaderLogo"
import { MobileNavbar } from "../MobileNavbar"
import { Input } from "../Input"
import { MobileNavbarLink } from "../MobileNavbarLink"

import { PiListBold, PiReceipt, PiMagnifyingGlassBold } from 'react-icons/pi'

import { useAuth } from "../../hooks/auth";

export function HeaderMobile({ isAdmin = false, className, onChange }) {
  const { SignOut } = useAuth()
  const [isActive, setIsActive] = useState(false)

  function handleNavbarToggle() { 
    setIsActive(!isActive)
  }

  return(
    <Container className={className}>

      { isAdmin &&
        <MobileNavbar 
          onClick={handleNavbarToggle} 
          className={isActive ? null : "navbar-display-none"}
        >
          <Input 
            type="text" 
            placeholder="Busque por pratos ou ingredientes"
            icon={PiMagnifyingGlassBold}
            onChange={onChange}
          />
          <MobileNavbarLink page={"/dishes/new"} title={"Novo prato"}/>
          <MobileNavbarLink page={"/"} title={"Sair"} onClick={SignOut}/>
        </MobileNavbar>
      }

      { !isAdmin &&
        <MobileNavbar 
          onClick={handleNavbarToggle}
          className={isActive ? null : "navbar-display-none"}
        >
          <Input 
            type="text" 
            placeholder="Busque por pratos ou ingredientes"
            icon={PiMagnifyingGlassBold}
            onChange={onChange}
          />
          <MobileNavbarLink page={"/"} title={"Sair"} onClick={SignOut}/>
        </MobileNavbar>
      }
      

      <button 
        className="navbar-btn" 
        onClick={handleNavbarToggle}
      > 
        <PiListBold className="list-svg"/>
      </button>
      
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