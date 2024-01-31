import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Productos(){
    const [productosData, setProductosData]=useState([]);
    useEffect(()=>{
        axios.get("https://apis-productos-usuarios.onrender.com/productos/api/mostrarProductos")
        .then((response)=>{
            setProductosData(response.data);
        }).catch((err)=>{
            console.log("Error productos: "+err);
        });
    },[])

    const vistaProductos=productosData.map((product)=>{
        var editar="/editar/"+product.id;
        var borrar="/borrar/"+product.id;
        var foto="https://apis-productos-usuarios.onrender.com/images/"+product.foto;
        return(
            <tr key={product.id} className="aling-middle">
                <td>{product.id}</td>
                <td>{product.nombre}</td>
                <td>{product.descripcion}</td>
                <td><img src={foto} alt={product.foto} width="100px"></img></td>
                <td>
                    <Link to={editar}>Editar</Link> / 
                    <Link to={borrar}>Borrar</Link>
                </td>
            </tr>
        );
    });

    return(
        <table  className="table table-hover">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Foto</th>
                    <th>Editar / Borrar</th>
                </tr>
            </thead>
            <tbody>
                {vistaProductos}
            </tbody>
        </table>

    );
}