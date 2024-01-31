import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function Usuarios(){
    const [datosUsuarios, setDatosUsuarios] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/api/motrarUsuarios")
        .then((response)=>{
            setDatosUsuarios(response.data);
        }).catch((err)=>{
            console.log('Error usuarios: '+err);
        });
    },[]);

    const vistaUsuarios=datosUsuarios.map((usuario)=>{
        var editar="/editar/"+usuario.id;
        var borrar="/borrar/"+usuario.id;
        var foto="http://localhost:3000/images/"+usuario.foto;
        return(
            <tr key={usuario.id} className="aling-middle">
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.usuario}</td>
                <td>{usuario.password}</td>
                <td><img src={foto} alt="Imagen" width="100px"></img></td>
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
                </tr>
            </thead>
            <tbody>
                {vistaUsuarios}
            </tbody>
        </table>
    );
}