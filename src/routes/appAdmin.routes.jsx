import { Routes, Route } from "react-router-dom";

import { AdminHome } from '../pages/Admin/AdminHome'
import { AdminDetails } from '../pages/Admin/AdminDetails'
import { AddDish } from '../pages/Admin/AddDish'
import { EditDish } from '../pages/Admin/EditDish'
 
export function AppAdminRoutes() {
  return(
    <Routes>
      <Route path="/" element={<AdminHome />} />
      <Route path="/dishes/:id" element={<AdminDetails />} />
      <Route path="/dishes/new" element={<AddDish />} />
      <Route path="/edit/:id" element={<EditDish />} />
    </Routes>
  )
}