import { BrowserRouter } from "react-router-dom";

import { AppUserRoutes } from "./appUser.routes";
import { AppAdminRoutes } from "./appAdmin.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";

export function Routes(){
  const { user } = useAuth()

  return(
    <BrowserRouter>
      {user ? (user.isAdmin ? <AppAdminRoutes /> : <AppUserRoutes />) : <AuthRoutes />}
    </BrowserRouter>
  )
}