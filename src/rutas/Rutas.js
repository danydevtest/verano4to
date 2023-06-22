import { Routes, Route } from "react-router-dom";

import AdminLayout from "../Layout/adminLayout/AdminLayout";
import HomeAdmin from "../paginas/admin/Home";
//import piePagina from "../components/piepagina";

function Rutas() {
  return (
   
      <AdminLayout>
        <Routes>
          <Route path="/admin/home" element={<HomeAdmin />} />
        </Routes>
      </AdminLayout>
   
  );
}
export default Rutas;
