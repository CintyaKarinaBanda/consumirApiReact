import axios from "axios";
import { useState } from "react";
import { url_ApiProducto } from "../config/rutas";

export function NuevoProducto() {
    const [formData, setFormData] = useState({
        nombre: "",
        usuario: "",
        password: "",
        foto: ""
    });
    const [mensaje, setMensaje] = useState("");
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    }
    async function guardarUsuario(e) {
        e.preventDefault();
        const response = await axios.post(
            url_ApiProducto+"nuevoProducto",
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
                        <h3>Nuevo Producto</h3>
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
                            id="descripcion"
                            name="descripcion"
                            className="form-control mb-3"
                            placeholder="Descripcion"
                            value={formData.descripcion}
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