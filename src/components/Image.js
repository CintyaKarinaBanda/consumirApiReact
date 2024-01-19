import { useState } from "react";

export function Image(){
    const [image, setImage]=useState(true);
    return(
        <>
            <button onClick={()=>{
                if(image===true){
                    setImage(false);
                    document.getElementById("imagen").style.display="none";
                } else {
                    setImage(true);
                    document.getElementById("imagen").style.display="block";
                }
            }}> Mostrar / Ocultar </button>
            <p><img id="imagen" src={process.env.PUBLIC_URL+"/images/descarga.png"} alt="images"/></p>
             
        </>
    )
}