import { useState } from "react";

export function Contador(){
    const [cont, setCont] = useState(0);

    function avanzar(){
        setCont(cont+1);
    }

    function reiniciar(){
        setCont(0);
    }

    return(
        <>
        <p>El contador este en: {cont}</p>
        <button onClick={avanzar}>Incrementar</button>
        <button onClick={reiniciar}>Reiniciar</button>
        </>
    )
}