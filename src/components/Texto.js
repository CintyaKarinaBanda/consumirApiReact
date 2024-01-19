import { useState } from "react";

export function Texto() {
  const [texto, setTexto] = useState("Apagado");
  const [cont, setCont] = useState(4);

  const estados = ["25%", "50%", "75%", "100%", "Apagado"];

  function mover(num) {
    let nuevoCont = cont + num;
    console.log(nuevoCont);
    if (nuevoCont >= estados.length) {
      nuevoCont = 0;
    } else if (nuevoCont < 0) {
      nuevoCont = estados.length - 1;
    }

    setCont(nuevoCont);
    setTexto(estados[nuevoCont]);
  }

  function incrementar() {
      mover(1);
  }

  function decrementar() {
    mover(-1);
  }

  function apagar() {
    setTexto("Apagado");
    setCont(4);
  }

  return (
    <>
      <p>{texto}</p>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
      <button onClick={apagar}>Apagar</button>
    </>
  );
}
