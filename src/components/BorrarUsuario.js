import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { url_ApiUsuario } from "../config/rutas";

export function BorrarUsuario() {
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function borrarUsuario() {
            var res = await axios.get(url_ApiUsuario+"borrarUsuario/" + params.id);
            console.log(res);
            navigate("/usuarios");
        }
        borrarUsuario();
    }, [params.id,navigate]);

    return (
        <h1>Borrando Usuario</h1>
    );
}