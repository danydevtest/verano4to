import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminLayout from "../Layout/adminLayout/AdminLayout";
import Home from "../paginas/Home";
//import piePagina from "../components/piepagina";

function Rutas() {
  return (
    <BrowserRouter>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AdminLayout>
    </BrowserRouter>
  );
}
export default Rutas;
