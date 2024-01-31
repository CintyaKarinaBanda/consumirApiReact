import axios from "axios";
import { useEffect, useState } from "react";

export function Productos(){
    const [productosData, setProductosData]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/productos/api/mostrarProductos")
        .then((response)=>{
            setProductosData(response.data);
        }).catch((err)=>{
            console.log("Error productos: "+err);
        });
    },[])

    const vistaProductos=productosData.map((product)=>{

        return(
            <tr key={product.id} className="aling-middle">
                <td>{product.id}</td>
                <td>{product.nombre}</td>
                <td>{product.descripcion}</td>
                <td>Foto</td>
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
                </tr>
            </thead>
            <tbody>
                {vistaProductos}
            </tbody>
        </table>

    );
}