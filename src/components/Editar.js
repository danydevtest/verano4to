import React, {useState} from "react";

function Editar() {

    const variables={
        nombre:"",
        precio:"",
        cantidad:"",
        descripcion:"",
        image:""
    }

    const [saveDatos, setSaveDatos]=useState(variables);

    const onChange=()=>{
        alert("Cambio")
    }

    const EditarForm=()=>{
        alert("Edicion de formulario")
    }


  return (
    <div>
      <form class="row g-3" onSubmit={EditarForm}>
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
        <div class="col-md-12">
          <label for="validationDefault02" class="form-label">
            Descripcion
          </label>
          <textarea
            type="text"
            class="form-control"
            id="validationDefault02"
            placeholder="Redacta una descripción"
            name="descripcion"
            value={saveDatos.descripcion}
            onChange={onChange}
            required
          />
        </div>
        <div class="col-md-12">
          <input
            type="file"
            class="form-control"
            id="validationDefault02"
            placeholder="Ingresa la imagen"
            name="image"
            value={saveDatos.image}
            onChange={onChange}
            required
          />
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Editar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Editar;
