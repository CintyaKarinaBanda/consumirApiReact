import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Error} from"./Error";
import { Menu } from "./Menu";
import {Usuarios} from "./Usuarios";
import {Productos} from "./Productos";
import {EditarUsuario} from "./EditarUsuario";
import {NuevoUsuario} from "./NuevoUsuario";
import { NuevoProducto } from "./NuevoProducto";
import { EditarProducto } from "./EditarProducto";
import { BorrarUsuario } from "./BorrarUsuario";
import { BorrarProducto } from "./BorrarProducto";


export function Rutas(){
    return(
        <>
        <Menu/>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error/>}></Route>
                <Route path="/usuarios" element={<Usuarios/>}></Route>
                <Route path="/productos" element={<Productos/>}></Route>
                <Route path="/nuevoUsuario" element={<NuevoUsuario/>}></Route>
                <Route path="/editarUsuario/:id" element={<EditarUsuario/>}></Route>
                <Route path="/borrarUsuario/:id" element={<BorrarUsuario/>}></Route>
                <Route path="/nuevoProducto" element={<NuevoProducto/>}></Route>
                <Route path="/editarProducto/:id" element={<EditarProducto/>}></Route>
                <Route path="/borrarProducto/:id" element={<BorrarProducto/>}></Route>
                

            </Routes>
        </BrowserRouter>
        </>
    );
}