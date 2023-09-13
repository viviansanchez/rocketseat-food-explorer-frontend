import { Routes, Route } from "react-router-dom";

import { UserHome } from '../pages/User/UserHome'
import { UserDetails } from '../pages/User/UserDetails'
//didnt import UserMobileMenu for now bc I am thinking about turning it into a component instead of a page.

export function AppUserRoutes() {
  return(
    <Routes>
      <Route path="/" element={<UserHome />}/>
      {/* check later if it should be / or /dishes */}
      <Route path="/dishes/:id" element={<UserDetails />} />
    </Routes>
  )
}