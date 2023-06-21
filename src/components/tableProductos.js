import React, { useState } from "react";

function TableProductos() {
  const productos = [
    { id: 1, nombre: "coca cola 3 litros", precio: 50.0, cantidad: 20 },
    { id: 2, nombre: "Fanta 600 ml", precio: 15.0, cantidad: 30 },
    { id: 3, nombre: "Pepsi 1.5 L", precio: 30.0, cantidad: 10 },
  ];

  const [modal, setModal] = useState(false);

  const modalAbrirCerrar = () => {
    const myModal = document.getElementById("myModal");
    const myInput = document.getElementById("myInput");

    myModal.addEventListener("shown.bs.modal", () => {
      myInput.focus();
    });
  };

  const GuardarDatos=()=>{
    alert('Los datos se han guardado correctamente')
  }

  const Eliminar = () => {
    alert("Los datos se han eliminado con éxito");
  };

  const Editar = () => {
    alert("Los datos se han modificado con éxito");
  };

  const listaProducto = productos.map((producto) => {
    return (
      <tbody>
        <tr>
          <th scope="row">{producto.id}</th>
          <td>{producto.nombre}</td>
          <td>$&nbsp;{producto.precio}.00</td>
          <td>
            <button className="btn btn-info" onClick={Editar}>
              <i className="bi bi-pencil"></i>
            </button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={Eliminar}>
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
