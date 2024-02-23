import axios from "axios";
import { useState } from "react";
import { url_ApiUsuario } from "../config/rutas";

export function NuevoUsuario() {
  const [formData, setFormData] = useState({
    nombre: "",
    usuario: "",
    password: "",
    foto: ""
  });

  const [mensaje, setMensaje] = useState("");

  async function guardarUsuario(e) {
    e.preventDefault();

    const response = await axios.post(
      url_ApiUsuario+"nuevoUsuario",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log(response);
    // reset form
    setFormData({
      nombre: "",
      usuario: "",
      password: "",
      foto: null
    });

    // alert("Usuario Guardado");
    setMensaje(response.data);
    setTimeout(() => {
      setMensaje("");
    }, 3000);


  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  return (
    <div className="container mt-4 mb-4">
        {/* mesaje de que se guuardo coreectamente el usuario solo debe aparecewr cuando da respuesta  */}
        {mensaje && (
            <div className="alert alert-success" role="alert">
                {mensaje}
            </div>
        )}
      <form onSubmit={guardarUsuario}>
        <div className="card">
          <div className="card-header">
            <h3>Nuevo Usuario</h3>
          </div>
          <div className="card-body">
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control mb-3"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="usuario"
                name="usuario"
                className="form-control mb-3"
                placeholder="Usuario"
                value={formData.usuario}
                onChange={handleInputChange}
              />
              <input
                type="password"
                id="password"
                name="password"
                className="form-control mb-3"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <input
                type="file"
                id="foto"
                name="foto"
                className="form-control mb-3"
                onChange={(e) =>
                  setFormData({ ...formData, foto: e.target.files[0] })
                }
              />
          </div>
          <div className="card-footer">
            <button className="btn btn-primary" type="submit">Guardar</button>
          </div>
        </div>
      </form>
    </div>
  );
}