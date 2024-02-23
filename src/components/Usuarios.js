import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import {url_ApiUsuario, url_Images} from "../config/rutas";

export function Usuarios(){
    const [datosUsuarios, setDatosUsuarios] = useState([]);
    useEffect(()=>{
        axios.get(url_ApiUsuario+"motrarUsuarios")
        .then((response)=>{
            setDatosUsuarios(response.data);
        }).catch((err)=>{
            console.log('Error usuarios: '+err);
        });
    },[]);

    const vistaUsuarios=datosUsuarios.map((usuario)=>{
        var editar="/editarUsuario/"+usuario.id;
        var borrar="/borrarUsuario/"+usuario.id;
        var foto=url_Images+usuario.foto;
        return(
            <tr key={usuario.id} className="aling-middle">
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.usuario}</td>
                <td>******</td>
                <td><img src={foto} alt={usuario.foto} width="100px"></img></td>
                <td>
                    <Link to={editar}>Editar</Link> / 
                    <Link to={borrar}>Borrar</Link>
                </td>
            </tr>
        );
    });

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Password</th>
                    <th>Foto</th>
                    <th>Editar / Borrar</th>
                </tr>
            </thead>
            <tbody>
                {vistaUsuarios}
            </tbody>
        </table>
    );
}