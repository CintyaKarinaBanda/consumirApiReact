import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url_ApiProducto } from "../config/rutas";

export function BorrarProducto(){
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function borrarUsuario() {
            var res = await axios.get(url_ApiProducto+"borrarProductos/" + params.id);
            console.log(res);
            navigate("/productos");
        }
        borrarUsuario();
    }, [params.id,navigate]);

    return (
        <h1>Borrando Producto</h1>
    );
}