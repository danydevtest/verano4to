import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "../Layout/adminLayout/AdminLayout";
import HomeAdmin from "../paginas/admin/Home";
import Home from "../paginas/client/Home";
//import piePagina from "../components/piepagina";

function Rutas() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          <Route path="/admin/home" element={<HomeAdmin />} />
          <Route path="/" element={<Home/>}/>
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
}
export default Rutas;
