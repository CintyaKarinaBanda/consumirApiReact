import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Error} from"./Error";
import { Menu } from "./Menu";
import {Usuarios} from "./Usuarios";
import {Productos} from "./Productos";


export function Rutas(){
    return(
        <>
        <Menu/>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Error/>}></Route>
                <Route path="/usuarios" element={<Usuarios/>}></Route>
                <Route path="/productos" element={<Productos/>}></Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}