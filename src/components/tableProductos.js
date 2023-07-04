import React, { useState, useEffect } from "react";
//import { refrescos } from "../bd/datos";
import Axios from "../services/Axios";

function TableProductos() {
  const datos = {
    id:"",
    nombre: "",
    precio: "",
    cantidad: "",
  };

  const [saveDatos, setSaveDatos] = useState(datos);
  const [almacenarDatos, setAlmacenarDatos]=useState([]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setSaveDatos({ ...saveDatos, [name]: value });
  };

  const GuardarDatos = async (e) => {
    e.preventDefault();

    await Axios.post("producto/guardarProducto", saveDatos).then(() => {
      console.log("Registros guardados correctamente");
    });
    // console.log(guardarInformacion);
    consultarInformacion();
    setSaveDatos(datos);
  };

  const consultarInformacion=async()=>{
    const consultar=await Axios.get("producto/consultarProducto");
    setAlmacenarDatos(consultar.data);
    //console.log(consultar.data);
  }

  const Eliminar = async(id) => {
    const eliminar= await Axios.delete(`producto/eliminarProducto/${id}`);
    console.log("Los datos se eliminaron correctamente: "+eliminar);
    consultarInformacion();
  };

  const buscarOne = async (id) => {
    const editar=await Axios.patch(`producto/oneProducto/${id}`);
    setSaveDatos(editar.data);
  };

  useEffect(()=>{
    consultarInformacion();
  },[])

  const listaProducto = almacenarDatos.map((producto) => {
    return (
      <tbody>
        <tr>
          <th scope="row">{producto.id}</th>
          <td>{producto.nombre}</td>
          <td>$&nbsp;{producto.precio}.00</td>
          <td>
            <button className="btn btn-info" onClick={()=>buscarOne(producto._id)}>
              <i className="bi bi-pencil"></i>
            </button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={()=>Eliminar(producto._id)}>
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <div>
      <div className="section">
        <button
          type="button"
          class="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Agregar producto...
        </button>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Editar</th>
            <th scope="col">Eliminar</th>
          </tr>
        </thead>

        {listaProducto}
      </table>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Registro de productos
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form class="row g-3" onSubmit={GuardarDatos}>
                <div class="col-md-12">
                  <label for="validationDefault01" class="form-label">
                    Nombre del producto
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault01"
                    placeholder="Nombre del producto"
                    name="nombre"
                    value={saveDatos.nombre}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationDefault02" class="form-label">
                    Precio
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    placeholder="Precio del producto"
                    name="precio"
                    value={saveDatos.precio}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="col-md-12">
                  <label for="validationDefault02" class="form-label">
                    Cantidad
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="validationDefault02"
                    placeholder="Cantidad de productos"
                    name="cantidad"
                    value={saveDatos.cantidad}
                    onChange={onChange}
                    required
                  />
                </div>
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableProductos;
