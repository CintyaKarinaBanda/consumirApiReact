import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url_ApiProducto, url_Images } from "../config/rutas";

export function EditarProducto() {
    const params = useParams();
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [rutaFoto, setRutaFoto] = useState('');
    const [foto, setFoto] = useState(null);

    useEffect(() => {
        async function recuperarDatos() {
            var res = await axios.get(url_ApiProducto+"buscarProductoPorId/" + params.id);
            setId(res.data.id);
            setNombre(res.data.nombre);
            setDescripcion(res.data.descripcion);
            setRutaFoto(url_Images + res.data.foto);
        }
        recuperarDatos();
    }, [params.id]);
    const [mensaje, setMensaje] = useState("");

    async function editarProducto(e) {
        e.preventDefault();
        const formData=new FormData();
        formData.append("id",id);
        formData.append("nombre", nombre);
        formData.append("descripcion",descripcion);
        formData.append("foto", foto);
        const res= await axios.post(url_ApiProducto+"editarProductos",formData,{
            headers:{
                "Content-Type":"multipart/form-data"
            }
        });
        setNombre("");
        setDescripcion("");
        setFoto(null);
        setMensaje(res.data);
        setTimeout(()=>{
            setMensaje("");
        },3000);
        navigate("/productos")
    }

    return (
        <div className="container mt-4 mb-4">
            {/* mesaje de que se guuardo coreectamente el usuario solo debe aparecewr cuando da respuesta  */}
            {mensaje && (
                <div className="alert alert-success" role="alert">
                    {mensaje}
                </div>
            )}
            <form onSubmit={editarProducto}>
                <div className="card">
                    <div className="card-header">
                        <h3>Editar Producto</h3>
                    </div>
                    <div className="card-body">
                        <input type="text" id="id" name="id" value={id} hidden />
                        <input type="text" id="nombre" name="nombre" className="form-control mb-3" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} autoFocus />
                        <input type="text" id="descripcion" name="descripcion" className="form-control mb-3" placeholder="Descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                        <div className="form-control mb-3">
                            <img src={rutaFoto} width="100" alt="Foto de usuario" />
                        </div>
                        <input type="file" id="foto" name="foto" className="form-control mb-3" onChange={(e) => setFoto(e.target.files[0])} />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" type="submit">Guardar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}